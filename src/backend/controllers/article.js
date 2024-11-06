/* eslint-disable */
const Article = require('../models/article');

exports.createArticle = async (req, res) => {
  const { title, content, alt, category } = req.body;

  if (!title || !content || !req.file || !alt) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires : title, content, image et alt.' });
  }

  try {
    const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    const article = new Article({
      title,
      content,
      image: imageUrl,
      alt,
      category
    });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllArticles = (req, res, next) => {
  Article.find()
    .then((article) => {
      res.status(200).json(article);
    })
    .catch((error) => {
      res.status(404).json({ error: error });
    });
};

exports.getArticleById = (req, res) => {
  Article.findById(req.params.id)
    .then(article => {
      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }
      res.status(200).json(article);
    })
    .catch(error => res.status(500).json({ error: 'Server error' }));
};

exports.updateArticle = async (req, res) => {
  const { title, content, alt, category } = req.body
  const updateData = { title, content, alt, category }
  if (req.file) {
    updateData.image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  }
  try {
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, updateData, { new: true })
    if (!updatedArticle) {
      return res.status(404).json({ error: 'Article not found' })
    }
    res.status(200).json(updatedArticle)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.deleteArticle = (req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then((article) => {
      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }
      res.status(200).json({ message: 'Article deleted successfully' });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};
