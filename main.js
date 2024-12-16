import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <table style="text-align: left">
        <tr>
          <td>VITE_SOURCE</td>
          <td>${import.meta.env.VITE_SOURCE}</td>
        </tr>
        <tr>
          <td>VITE_EXPANDED</td>
          <td>${import.meta.env.VITE_EXPANDED}</td>
        </tr>
    </div>
  </div>
`;
