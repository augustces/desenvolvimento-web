import { useEffect, useState } from "react";

function Questao01X () {
    //criação do vetor que será enviado para o filho (Questao01Y)
    const alunos = [
        { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
        { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }
    ]
    //variável de estado para guardar as médias de cada aluno
    const [medias, setMedias] = useState([])

    //função para receber as médias de cada aluno calculada no componente filho
    const receberMedias = (mediasRecebidas) => {
        setMedias(()=>mediasRecebidas)
    }

    return (
        <>
        <Questao01Y alunos={alunos} enviarMedias = {receberMedias}/>
        {()=>{
            let it =0
            while(it < medias.length){
                if(medias[it] >= 7.0){
                    return <h1>{alunos[it].nome}</h1>
                }
            }
        }
        }
        </>
    )
}

const Questao01Y = (props) => {
    //criação dos alunos separadamente
    const aluno1 = props.alunos[0]
    const aluno2 = props.alunos[1]
    const aluno3 = props.alunos[2]
    //criação do vetor de médias
    const mediasAlunos = []
    
    //função para calcular as médias
    const calcularMedia = (ap1,ap2) => {
        return ((ap1+ap2)/2)
    }
    
    //useEffect está sem parâmetros para ser usado como construtor
    useEffect(
        ()=>{
            //cálculo de médias de cada aluno e armazenamento do resultado no vetor de médias
            mediasAlunos.push(calcularMedia(aluno1.notas.ap1 + aluno1.notas.ap2))
            mediasAlunos.push(calcularMedia(aluno2.notas.ap1 + aluno2.notas.ap2))
            mediasAlunos.push(calcularMedia(aluno3.notas.ap1 + aluno3.notas.ap2))
        },
        []
    )
    return (
        <>
        <h1>{()=>{
            props.enviarMedias(mediasAlunos)
        }}</h1>
        </>
    )
}

export  default Questao01X;