const Incrementar = ({incrementar}) => {
    return (
        <>
        <button
        onClick={
            ()=>{
                incrementar()
            }
        }>
            Id + 1
        </button>
        </>
    )
}
export default Incrementar