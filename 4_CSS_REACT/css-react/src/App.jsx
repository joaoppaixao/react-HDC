import './App.css'

// 2 - css do componente
import MyComponent from './components/MyComponent'

function App() {

  return (
    <div>
      { /* 1 - css global */}
      <h1>CSS no React</h1>
      { /* 2 - css do componente */}
      <MyComponent />
      <p>Pegou o CSS do componente</p>
    </div>
  )
}

export default App
