import Pokemona from "./componenteContexto"
import { useContext } from "react"
const ComponenteNeto = () => {
    let num = useContext(Pokemona)
    num +=2
    return(
        <div>
                            <h1>neto</h1> 
                       <img 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`}
                        alt = "Pokemon"
                    style = {{width:"400px"}}
                />
                        </div> 
    )
}

export default ComponenteNeto