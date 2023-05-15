import './App.css';
import Questao01X from './components/AP1/Questao01';
import Questao02 from './components/AP1/Questao02';
import Questao03 from './components/AP1/Questao03';

function App() {
  return (
    <div className="App">
      <h1>Questão 01</h1>
      <Questao01X/>
      <hr/>
      <h1> Questão 02</h1>
      <Questao02/>
      <hr/>
      <h1>Questão 03</h1>
      <Questao03/>
    </div> 
  );
}

export default App;