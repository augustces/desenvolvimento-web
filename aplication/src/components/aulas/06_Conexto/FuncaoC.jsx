import FuncaoD from "./FuncaoD"
import {useContext} from "react"
import MinhaCor from "./MeuContexto"

const FuncaoC = () => {
    const color = useContext(MinhaCor)
    return (
        <div>
            <h1 style ={{backgroundColor: color}}>Funcao C</h1>
            <FuncaoD/>
        </div>
        
    )
}

export default FuncaoC