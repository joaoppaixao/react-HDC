import './App.css'

// 2 - importando o componente
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

function App() {
  // 3 - comentários
  return <div className='App'>
    {/* 3 - comentários no JSX */}
    <h1>Fundamentos do React</h1>
    <FirstComponent />
    <TemplateExpression />
    <MyComponent />
    <Events />
  </div>;
}

export default App
