import { useEffect, useState } from "react"

const Questao02 = () => {
    //link para imagem de frente do pokemon
    const linkFrente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
    //link para imagem das costas do pokemon
    const linkCostas = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/122.png"
    //variável de estado que serve como interruptor, serve para saber se é para mostrar a frente ou as costas
    const [turn, setTurn]= useState(true)
    //variável de estado que serve para armazenar o link atual do pokemon (frente ou costas)
    const [atual, setAtual] = useState(linkFrente)
    
    useEffect(
        //verifica se o interruptor está verdadeiro ou falso
        //se verdadeiro, mostra a frente do pokemon
        //senão, as costas
        // ele faz essa escolha atualiando a variável de estado "atual"
        ()=>{
            if (turn){
                setAtual(()=>linkFrente)
            }
            else {
                setAtual(()=>linkCostas)
            }
        },
        [turn]
    )

    return (
        <>
        <img src={atual} alt="Pokemon"/>
        <button onClick={
                ()=>setTurn( ()=>!turn )
            }>
            Turn
        </button>
        </>
    )
}
export default Questao02