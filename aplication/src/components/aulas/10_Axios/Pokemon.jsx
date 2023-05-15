import axios from "axios"
import { useEffect, useState } from "react"
const Pokemon = () => {
    const [id,setId] = useState(1)
    const [nome,setNome] = useState("")
    const [imagem, setImagem] = useState("")
    const [imagem2, setImagem2] = useState("")
    useEffect(
        ()=>{
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(
                //resposta
                (response)=>{
                   // console.log(response.data)  //dados que estão no response
                    setNome(response.data.name)
                    setImagem(response.data.sprites.front_default)
                    setImagem2(response.data.sprites.back_default)
                }
            )
            .catch((erro)=>console.log(erro))
        },
        []
    )
    return (
        <>
        <table>
            <tr>
            <h3>Nome: {nome}</h3>
            <h3>Id: {id}</h3> 
            </tr>
            <tr>
                <td>
            <img src={imagem} style = {{width:"400px"}}/>
            </td>
            <td>
            <img src={imagem2} style = {{width:"400px"}}/>
            </td>
            </tr>
            <button
            onClick={
                ()=>{
                    setId((prev)=>prev-1)
                }
            }>Last Pokemon</button>
            <button
            onClick={
                ()=>{
                    setId((prev)=>prev+1)
                }
            }>Next Pokemon</button>
            </table>
        </>
    )
}
export default Pokemon