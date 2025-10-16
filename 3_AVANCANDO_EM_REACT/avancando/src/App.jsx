import './App.css'

// 2 - imagem em assets
import night from './assets/night.jpg';

// 3 - useState
import Data from './components/Data';
import Name from './components/Name';
import Contador from './components/Contador';

// 4 - renderização de lista
import ListRender from './components/ListRender';

{/* 7 - conditional render */}
import ConditionalRender from './components/ConditionalRender';

// 8 - props 
import ShowUserName from './components/ShowUserName';

// 9 - desestruturando props
import CarDetails from './components/CarDetails';

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
      {/* 4 - render de lista */}
      <ListRender />
      {/* 7 - conditional render */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name="João" />
      {/* 9 - desestruturando props */}
      <CarDetails brand="Porsche" km={5000} color="Preta" />
    </div>
  )
}

export default App
