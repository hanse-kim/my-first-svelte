import './app.css';
import App from './App.svelte';

const appElement = document.getElementById('app');
const app =
  appElement &&
  new App({
    target: appElement,
  });

export default app;
