import { useState } from "react"
import BotaoDe from "./botaoDecrementar"
import BotaoIn from "./botaoIncrementar"
import Imagem from "./imagem"

const TelaPrincipal = () => {
    const [id,setId] = useState(1)

    const incremento = () => {
        setId((prev) => prev + 1)
    }

    const decremento = () => {
        setId((prev) => prev - 1)
    }

    return (
        <>
        <table>
            <body>
                <tr>
                    <td colSpan={2}>
                        <Imagem id={id} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <BotaoIn/>
                    </td>
                    <td>
                        <BotaoDe/>
                    </td>
                </tr>
            </body>
        </table>
        </>
    )
}

export default TelaPrincipal