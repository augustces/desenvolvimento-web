import MinhaCor from "./MeuContexto"

const FuncaoB = () => {
    return (
        <MinhaCor.Consumer>
            {
                (cores) => {
                    return (
                        <div>
                            <h1 style = {{backgroundColor : cores.bkgB}}>Funcao B</h1>
                        </div>
                    )
                }
            }
        </MinhaCor.Consumer>
    )
}

export default FuncaoB