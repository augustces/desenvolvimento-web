import {useState} from "react"
//import { useEffect } from "react"

const Cities = () => {
    const[maior,setMaior] = useState(0)
    const[menor,setMenor] = useState(0)
    const[flag, setFlag] = useState(false)
    const[cidades,setCidades] = useState(
        [{nome:"Quixadá", votos: 0},
        {nome:"Fortaleza", votos: 0},
        {nome:"Acaraú", votos: 0},
        {nome:"Sobral", votos: 0}]
    )

    const votar= (nome) => {
        const index = cidades.findIndex(
            (cidade) => cidade.nome === nome
        )
        cidades[index].votos = cidades[index].votos + 1

        setFlag((f)=>!flag)
        setCidades(cidades) 
    }

    const votarCidades = (nome) => {
         const newCidades = cidades.map (
            (item)  => {
             if(item.nome === nome) 
              item.votos += 1
             return item
            }
         )
         setCidades(newCidades)
     }
    

    return(
        <div>
            <h1>Votação das cidades</h1>
            <h3>{cidades[0].nome} : {cidades[0].votos}</h3>
            <h3>{cidades[1].nome} : {cidades[1].votos}</h3>
            <h3>{cidades[2].nome} : {cidades[2].votos}</h3>
            <h3>{cidades[3].nome} : {cidades[3].votos}</h3>

        <h2>Aperte o botão correspondente para votar em determinada cidade:</h2>
            <button onClick={ 
                ()=>  votar("Quixadá") 
            }> Quixadá</button>
            <button onClick={
                ()=>  votar("Fortaleza") 
            }> Fortaleza</button>
            <button onClick={
                 ()=>  votar("Acaraú")  
            }> Acaraú</button>
            <button onClick={
                 ()=>  votar("Sobral")  
            }> Sobral</button>
            <h1>Cidade(s) mais votada(s) e menos votada(s): </h1>
            <h3>Mais votada(s): {maior}</h3>
            <h3>Menos votada(s): {menor} </h3>
        </div>
    )
}

export default Cities;