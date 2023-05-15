const Supermercado = ({nome}) => {
    return (
        <div>
            <h1> Supermercado {nome}</h1>
            
        </div>
    )
}

const Legume = ({nome}) => {
    return (
        <div>
            <h1> Legume {nome}</h1>
        </div>
    )
}

const Bebida = ({nome}) => {
    return (
        <div>
            <h1> Bebida {nome}</h1>
        </div>
    )
}

export {Supermercado, Legume, Bebida};