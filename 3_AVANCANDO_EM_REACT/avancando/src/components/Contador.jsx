import React, { useState } from 'react'

const Contador = () => {

    const [contador, setContador] = useState(0);

  return (
    <div>
        <div>
            <p>Você clicou {contador} vezes.</p>
            <button onClick={() => (setContador(contador + 1))}>Clique para contar</button>
        </div>
    </div>
  )
}

export default Contador