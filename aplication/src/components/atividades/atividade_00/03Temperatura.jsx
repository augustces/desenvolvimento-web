const celsiusParaFahrenheit = (c) => {
    let f = 32 + (9 * c)/5
    return f
}

const fahrenheitParaCelsius= (f) => {
    let c = 5*(f - 32)/9
    return c
}

const kelvin = (k) => {
    let f =5*(k - 32)/9 + 273
    let c = k - 273
    return {f,c }
}

const Temperatura = () => { 
    let {f,c} = kelvin(356)
    return (
        <div>
            <h1>Fahrenheit: 95, Celsius: 35, Kelvin: 356</h1>
            <h1> Fahrenheit para Celsius: {fahrenheitParaCelsius(95)}</h1>
            <h1> Celsius para Fahrenheit: {celsiusParaFahrenheit(35)}</h1>
            <h1> Kelvin para Fahrenheit: {f }</h1>
            <h1> Kelvin para Celsius: {c }</h1>
        </div>
    )
}

export default Temperatura;