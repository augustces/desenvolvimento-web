import { useEffect, useState } from "react"

const Questao03 = ()=> {
    // variáveis de estados de maior e menor
    const [maior, setMaior] = useState("")
    const [menor, setMenor] = useState("")

     useEffect(
        ()=>{
            fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            .then(
                //retorna o arquivo json do site
                (response) => {
                return response.json()
                }       
            )       
            .then(
                //pega o vetor com todas as capitais e suas populações
                (data) => {
                let i= 0
                //salva as capitais com maior e menor populações, respectivamente
                let maiorP = data[0]
                let menorP = data[0]
                let maiorId = 0
                let menorId = 0
                //percorre o vetor data e pega o maior e o menor elemento
                while(i < data.length){
                    //verifica se a variável de maior população é realmente a maior
                    if (data[i].population > maiorP.population) {
                        //atualiza a capital de maior população
                        maiorP = data[i]
                        //atualiza o id da capital com maior população
                        maiorId = i
                    }
                    //verifica se a variável de menor população é realmente a menor
                    if (data[i].population < menorP.population){
                        //atualiza a capital de menor população
                        menorP = data[i]
                        //atualiza o id da capital com menor população
                        menorId = i
                    }
                    i+=1
                }
                //atualiza as variáveis de estado para os valores de maior população e menor população, respectivamente
                setMaior(()=>data[maiorId].capital)
                setMenor(()=>data[menorId].capital)
                }
            )
            .catch(error => console.log(error))
        },
        []
    )
    return(
        <>
        <h1>Maior população: {maior}</h1>
        <h1>Menor população: {menor}</h1>
        </>
    )
}
export default Questao03