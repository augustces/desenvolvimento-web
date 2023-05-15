import ComponenteNeto from "./componenteNeto"
import Pokemona from "./componenteContexto"
import { useContext } from "react"

const ComponenteFilho = () => {
    let num = useContext(Pokemona)
    num +=1
    return(
        <div>
           <h1>filho</h1>
           <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`}
                alt = "Pokemon"
                style = {{width:"400px"}}
                /> 
            <ComponenteNeto/> 
        </div>
    )
}

export default ComponenteFilho