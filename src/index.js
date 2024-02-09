import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // 실제 앱 컴포넌트의 경로에 따라 import

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);