//import logo from './logo.svg'
//import HelloWorld from './components/Calculadora';
import './App.css';
//import Calculadora from './components/Calculadora';
import MyProps  from './components/02MyProps';
function App() {
  return (
    <div className="App">
      <MyProps nome= "Augusto"
      curso = "Ciência da computação"/>
    </div>
  );
}

export default App;

/*
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
*/