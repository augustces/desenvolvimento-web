import Imagem from "./Imagem"
import Decrementar from "./Decrementar"
import Incrementar from "./Incrementar"
import { useState } from "react"
const TelaPrincipal = () => {
    const [id,setId] = useState(120)

    const incrementar = () => {
        setId((prev)=>prev+1)
    }

    const decrementar = () => {
        setId((prev)=>prev-1)
    }
    return (
        <>
        <table>
            <tbody>
                <tr>
                    <td>
                        <Imagem id={id}/>
                    </td>
                    </tr>
                    <tr>
                        <td>
                            <Decrementar decrementar = {decrementar}/>
                        </td>
                        <td>
                            <Incrementar incrementar = {incrementar}/>
                        </td>
                    </tr>
            </tbody>
        </table>

        </>
    )
}
export default TelaPrincipal