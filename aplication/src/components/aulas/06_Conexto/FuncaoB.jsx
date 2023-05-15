import MinhaCor from "./MeuContexto"

const FuncaoB = () => {
    return (
        <MinhaCor.Consumer>
            {
                (cor) => {
                    return (
                        <div>
                            <h1 style = {{backgroundColor :cor}}>Funcao B</h1>
                        </div>
                    )
                }
            }
        </MinhaCor.Consumer>
    )
}

export default FuncaoB