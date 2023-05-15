const Calculadora = () =>{
    function somar(x,y){
        return x + y
    }
    const subtrair = (x,y) => {
        return x - y
    }
    const multiplicar = (x,y) => x*y

    const dividir = (x,y) => x/y

    const chamarDiv = (funcDiv) => {
        return funcDiv(10,5)
    }
    return (
        <div>
            <h1> A soma dos números é: {somar(10,5)}</h1>
            <h1> A substração dos números é: {subtrair(10,5)} </h1>
            <h1> A multiplicação dos números é: {multiplicar(10,5)}</h1>
            <h1> A divisão dos números é: {chamarDiv(dividir)}</h1>
        </div>
    )
}
export default Calculadora;