import { useEffect } from "react"

const minhaPromessa = new Promise (
    (resolve,reject)=>{
        const x = false
        if (x) resolve ("Deu certo!")
        else reject("Deu errado!")
    }
)

const MeuAsync = ()=> {

    useEffect(
        ()=>{
            // minhaPromessa
            // .then(
            //     (data)=>console.log(data)
            // )
            // .catch(
            //     (error)=>console.log(error)
            // )
           getPromessa() 
        },
        []
    )

    async function getPromessa(){
        try{
            const data = await minhaPromessa
            console.log(data)
        }catch(erro){
            console.log(erro)
        }

    }
    return (
        <>
        <h1>Testando o async</h1>
        </>
    )
}

export default MeuAsync