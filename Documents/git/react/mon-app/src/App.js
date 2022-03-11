import HeaderPerso from './components/headerP'
import logo from './logo.svg';
import './App.css';
import FooterPerso from './components/footerP';

function App() {
  return (
    <div className="App">
      <HeaderPerso />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FooterPerso />
    </div>
  );
}

export default App;
