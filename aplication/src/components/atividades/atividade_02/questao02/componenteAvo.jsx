import Pokemona from './componenteContexto'
import ComponenteFilho from './componenteFilho'
const ComponenteAvo = () => {
    let num = 1
    return (
        <Pokemona.Provider value={num}>
            <div>
            <h1>avo</h1>
                <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`}
                alt = "Pokemon"
                style = {{width:"400px"}}
                />
                
                <ComponenteFilho/>
            </div>
        </Pokemona.Provider>
    )
}

export default ComponenteAvo