import React from 'react'

const Events = () => {

    const handleClick = (e) => {
        console.log(e)
        console.log("Executou")
    }

  return (
    <div>
        <button onClick={() => console.log("Testando um evento")}>Clique aqui</button>
        {/* 7 - evento com função */}
        <div>
            <button onClick={handleClick}>Clique aqui - com função</button>
        </div>
    </div>
  )
}

export default Events