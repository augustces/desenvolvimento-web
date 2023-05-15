const Myprops = (props) => {
    return (
        <div>
            <h1> Meu nome é: {props.nome}</h1>
            <h1>Meu curso é: {props.curso}</h1>
            <h1>Minha Universidade é: {props.universidade}</h1>
        </div>
    )
}
export default Myprops;