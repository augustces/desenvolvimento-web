const SaveData = () => {
    const saveData = () => {
        const aluno = {
            matricula: "00111",
            nome : "augusto",
            curso:" computer science"
        }
        localStorage.setItem(aluno.matricula,JSON.stringify(aluno))
    }
    
    return (
        <>
        <h1>Salvando Dados...</h1>
        {saveData()}
        </>
    )
}

const LoadData = () => {
    const loadData = () => {
        const aluno = JSON.parse(localStorage.getItem("00111"))
        return (
            <>
            <h3>Nome: {aluno.nome}</h3>
            <h3>Curso: {aluno.curso}</h3>
            </>
        )
    }
    return (
        <>
        <h1>Carregando dados...</h1>
        {loadData()}
        </>
    )
}


export  {SaveData, LoadData}