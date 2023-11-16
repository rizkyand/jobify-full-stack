# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
#### Step before running
make sure you are using LTS version Node.js because its project is not included docker
and then just running this code first

```javascript
npm run setting-project
```

#### .env setting
Please do create .env file in root before running project and do setting
and fill it with

```javascript
NODE_ENV = development
PORT=5001
MONGOURL= 'from your mongo url'
```

then you can run

```javascript
npm run dev
```

