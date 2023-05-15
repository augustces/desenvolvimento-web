/*function Imc (altura,peso) {
   let  imc = peso / (altura * altura);
    if (imc < 18){
        return "Abaixo do peso"
    }
    else if (imc > 25) {
        return  "Acima do peso"
    } 
        return  "Peso ideal" 
}*/

const  Filho = ({altura, peso}) => {
    const imcValue =()=> {
        return  peso / (altura * altura); 
    }
    
    const renderizarImc = () => {
    let  imc = imcValue(altura,peso)
        if (imc < 18){
            return <h3>Abaixo do peso</h3>
        }
        else if (imc > 25) {
            return <h3>Acima do peso</h3>
        } 
            return  <h3>Peso ideal</h3>
    }

    return (
        <div>
            <h1>O imc é: {imcValue().toFixed(2)}</h1>
            {renderizarImc()}
        </div>
    )
    }

    export default Filho;