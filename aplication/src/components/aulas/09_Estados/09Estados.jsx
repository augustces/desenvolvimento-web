import { useState, useEffect } from "react"

const Contador = () => {
    const [cont, setCont] = useState(0)

    const [ehPar, setEhPar] = useState(true)

    useEffect(
        () => {
            if(cont % 2 === 0) 
                setEhPar(true)
            else
                setEhPar(false)
        },
        [cont]
    )

    const aumentarCont = () => {
        setCont(cont+1)
    }

    return (
        <>
        <h1>Contador: {cont} </h1>
        <h1>É par: {ehPar + ""}</h1>
        <button 
        onClick={
            aumentarCont
        } >
            Chamar tropa
        </button>
        </>
    )
}

export default Contador