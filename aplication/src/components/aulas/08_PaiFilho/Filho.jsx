const Filho = ( props) => {
    return (
        <>
        <h1>Componente Filho</h1>
        <h3> Mesada: {props.mesada}</h3>
        <button 
        onClick={
            () => {
                //alert("Cliquei")
                props.enviarMsg("Obrigade, Daddy")
            }
        }>
            Grate, papai
        </button>
        </>
    )
}

export default Filho