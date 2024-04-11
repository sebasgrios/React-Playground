import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
.use(LanguageDetector)
.init({
  supportedLngs: ['en-GB', 'es-ES'],
  interpolation: { escapeValue: false },
  fallbackLng: 'en-GB',
  resources: {
    'en-GB': {
      global: global_en
    },
    'es-ES': {
      global: global_es
    },
  }
});

i18next.on('languageChanged',(lng) => {
  console.log('changed to -> ', lng);
  document.documentElement.setAttribute('lang', lng);
});

document.documentElement.lang = i18next.language;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
