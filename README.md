# taisezmoi

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Deployment to Github Pages

1. Delete the gh-pages branch on the remote repository:  
```sh
git push origin --delete gh-pages
```
2. Build the project to generate the dist folder:  
```sh
npm run build
```
3. Add the dist folder to the commit:  
```sh
git add dist/
```
4. Commit the changes:  
```sh
git commit -m "add dist"
```
5. Push the dist folder to the gh-pages branch:  
```sh
git subtree push --prefix dist origin gh-pages
```
6. Reset the last commit to avoid pushing dist to main:  
```sh
git reset HEAD~1
```