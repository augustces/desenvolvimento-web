import { useState, useEffect } from "react"
import axios from "axios"

const PokeAxios = () => {
    const [Id,setId] = useState(1)
    const [nome,setNome]= useState("Bulbasaur")
    const [imagem1, setImagem1] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")
    const [imagem2, setImagem2] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png")

    useEffect(
        ()=>{
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response)=>{
                    console.log(response.data)
                    setNome(response.data.name)
                    setImagem1(response.data.sprites.front_default)
                }
            )
            .catch(
                (error)=> console.log(error)
            )

        },
        [id]
    )

    return (
        <div>
            <table >
                <body>
                    <tr>
                        <td>
                            nome: {nome}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src = {imagem1}
                            style = {{width:250}}/>
                        </td>
                        <td>
                            <img src ={imagem2}
                            style={{width:250}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={()=>{setId = (prev) => (prev - 1) < 1 ?  1 : prev - 1 }}>
                                Id-1
                            </button>
                        </td>
                        <td>
                            <button onClick={()=>{setId = (prev) => prev + 1 }}>
                                Id+1
                            </button>
                        </td>
                    </tr>
                </body>
            </table>
        </div>
    )
}
export default PokeAxios