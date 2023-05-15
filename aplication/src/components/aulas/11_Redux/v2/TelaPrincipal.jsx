import Imagem from "./Imagem"
import Decrementar from "./Decrementar"
import Incrementar from "./Incrementar"

const TelaPrincipal = () => {
    return (
        <>
        <table>
            <tbody>
                <tr>
                    <td colSpan={2}>
                        <Imagem/>
                    </td>
                    </tr>
                    <tr>
                        <td>
                            <Decrementar/>
                        </td>
                        <td>
                            <Incrementar/>
                        </td>
                    </tr>
            </tbody>
        </table>

        </>
    )
}
export default TelaPrincipal