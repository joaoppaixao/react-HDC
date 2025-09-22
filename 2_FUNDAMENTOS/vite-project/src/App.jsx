import './App.css'

// 2 - importando o componente
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';

function App() {
  // 3 - comentários
  return <div className='App'>
    {/* 3 - comentários no JSX */}
    <h1>Fundamentos do React</h1>
    <FirstComponent />
    <TemplateExpression />
  </div>;
}

export default App
