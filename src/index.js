import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// 하이드레이션 적용
if (rootElement?.hasChildNodes()) {
  // 이미 렌더링된 HTML이 있다면 하이드레이션
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  // 새로 렌더링
  ReactDOM.createRoot(rootElement).render(app);
}

reportWebVitals();
