const Decrementar = ({decrementar}) => {
    return (
        <>
         <button onClick={
            ()=> decrementar()
         }>
            Id - 1
        </button>
        </>
    )
}
export default Decrementar