import logo from './logo.svg';
import './App.css';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation('global');

  return (
    <div className="App">
      <header className="App-header">
        <LanguageSelector />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('home.message', { file: 'src/App.js' })}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('home.link')}
        </a>
      </header>
    </div>
  );
}

export default App;
