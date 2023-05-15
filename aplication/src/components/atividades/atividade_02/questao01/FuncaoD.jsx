import { useContext } from "react"
import MinhaCor from "./MeuContexto"
const FuncaoD = () => {
    const cor = useContext(MinhaCor)
    return (
        <div>
            <h1 style={{backgroundColor: cor.bkgD }}>Funcao D</h1>
        </div>
        
    )
}

export default FuncaoD