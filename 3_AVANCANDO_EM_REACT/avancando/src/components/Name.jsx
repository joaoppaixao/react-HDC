import React, { useState } from 'react'

const Name = () => {
    
    const [nome, setNome] = useState("João");

  return (
    <div>
        <div>
            <p>Nome: {nome}</p>
            <button onClick={() => (setNome("Bruna"))}>Mudar nome</button>
        </div>
    </div>
  )
}

export default Name