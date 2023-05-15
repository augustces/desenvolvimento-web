import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import MinhaCor from "./MeuContexto"

const FuncaoA = () => {
    const cor = "blue"
    return (
        <MinhaCor.Provider value = {cor}>
            <div>
            <h1 style={{backgroundColor: cor}}>Funcao A</h1>
            <FuncaoB />
            <FuncaoC />
            </div>
        </MinhaCor.Provider>
    )
}

export default FuncaoA