import './App.css'

// 2 - css do componente
import MyComponent from './components/MyComponent'

function App() {

  // 4 - css dinâmico
  const n = 12;

  // 5 - classes dinamicas
  const redTitle = true;

  return (
    <div>
      { /* 1 - css global */}
      <h1>CSS no React</h1>
      { /* 2 - css do componente */}
      <MyComponent />
      <p>Pegou o CSS do componente</p>
      { /* 3 - inline style */}
      <p style={{color: "blue", padding: "20px", backgroundColor: "lightgray"}}>Este elemento tem estilos inline</p>
      { /* 4 - inline style dinâmico */}
      <h2 style={n > 10 ? {color: "purple"} : {color: "magenta"}}>CSS dinâmico</h2>
      <h2 style={n > 20 ? {color: "purple"} : {color: "magenta"}}>CSS dinâmico</h2>
      { /* 5 - classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Se for verdadeiro fica vermelho</h2>
    </div>
  )
}

export default App
