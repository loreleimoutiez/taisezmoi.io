/* eslint-disable */
const Article = require('../models/article');

exports.createArticle = async (req, res) => {
  try {
    const article = new Article({
      title: req.body.title,
      content: req.body.content,
      description: req.body.description,
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
