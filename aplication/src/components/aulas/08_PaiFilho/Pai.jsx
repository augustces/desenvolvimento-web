import Filho from "./Filho"

const Pai = ( ) => {
    const receberMsg = (mensagem) => {
        alert("Filho falou: " + mensagem)
    }
    return (
        <>
        <h1>Componente Pai</h1>
        <Filho mesada = {600.00} enviarMsg = {receberMsg}/>
        </>
    )
}

export default Pai