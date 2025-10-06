import './App.css'

// 2 - imagem em assets
import night from './assets/night.jpg';

// 3 - useState
import Data from './components/Data';
import Name from './components/Name';
import Contador from './components/Contador';

function App() {

  return (
    <div className='App' style={{ paddingBottom: "500px"}}>
      <h1>Avançando em React</h1>
      {/* 1 - imagem em public */}
      <img src="img.jpg" alt="Alguma imagem" />
      {/* 2 - imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* 3 - useState */}
      <Data />
      <Name />
      <Contador />
    </div>
  )
}

export default App
