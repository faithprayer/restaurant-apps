/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
import './component/search-bar';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const START = 10;
const NUMBER_OF_IMAGES = 100;
