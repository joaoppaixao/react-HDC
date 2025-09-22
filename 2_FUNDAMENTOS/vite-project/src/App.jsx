import './App.css'

// 2 - importando o componente
import FirstComponent from './components/FirstComponent';

function App() {
  // 3 - comentários
  return <div className='App'>
    {/* 3 - comentários no JSX */}
    <h1>Fundamentos do React</h1>
    <FirstComponent></FirstComponent>
  </div>;
}

export default App
