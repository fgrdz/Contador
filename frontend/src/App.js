import Display from "./components/display";
import imagem from './imagem.jpg'
import './App.css'
function App() {
  return (
    <div className="App">
      <header>
        <h1>Contagem Regressiva para férias de Yohanna!!!</h1>
        <img className='imagem'src={imagem}></img>
      </header>

      <Display></Display>
    </div>
  );
}

export default App;
