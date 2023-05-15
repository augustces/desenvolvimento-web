import rose from "../../assets/imagens/rose.png"
import  jasper from "../../assets/imagens/jasper.png"
function Hero ({name}) {
    //let linke = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstevenuniversofanfiction.fandom.com%2Fpt-br%2Fwiki%2FDiamante_Rosa_%2528Canon%2529&psig=AOvVaw1jE8d1HRmFJaiHfQ0u94qq&ust=1680014273410000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCd5YSr_P0CFQAAAAAdAAAAABAE"
    return (
        <div>
            <h1>Nome da heroína: {name}</h1>
            <img src =  {rose}
             alt = {name} style = {{width : 240}} />
        </div>
    )
}

function Enemy ({name}) {
    //let linke = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstevenuniverso.fandom.com%2Fwiki%2FJasper&psig=AOvVaw12G01IeZzsTYrlHUrwdsYw&ust=1680014302233000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOC9xZKr_P0CFQAAAAAdAAAAABAE"
    return (
        <div>
            <h1>Nome do inimigo: {name}</h1>
            <img src =  {jasper}
            alt ={name}  style = {{width : "400px"}} />
        </div>
    )
}

const Arena = () => {
    return (
        <div>
            <Hero name = "Diamante Rosa"/>
            <Enemy name = "Jasper"/>
        </div>
    )
}

const World = ({children}) => {
    return (
        <>
       {children}
        </>
    )
}

export {Arena, World, Hero, Enemy}