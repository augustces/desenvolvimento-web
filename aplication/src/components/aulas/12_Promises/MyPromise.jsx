import { useEffect } from "react"

const myPromise = new Promise(
    (resolve,reject)=>{
       setTimeout(
        ()=>{
            console.log("lógica terminada")
            const meuInt = Math.floor((Math.random()*10)) + 1
            console.log(meuInt)
            if (meuInt % 2 ===0) resolve("Deu tudo certo")
            else reject("Deu tudo errado")
        },
        3000
       ) 
    }
)

const meuGet = (url) => {
    console.log(url)
    return (
        myPromise
    )
}

const MinhaPromessa = ()=>{
    useEffect(
        ()=>{
            meuGet("http://fake")
            .then((response)=>console.log(response))
            .catch((error)=>console.log(error))
        },
        []
    )
    return(
        <>
    <h1>Testando a promise</h1>

        </>
    )
}

export default MinhaPromessa