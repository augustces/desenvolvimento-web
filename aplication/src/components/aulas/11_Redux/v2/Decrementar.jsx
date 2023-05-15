import { useDispatch } from "react-redux"
import { decrementar, decrementarValor } from "./slice/idSlice"

const Decrementar = () => {
    const dispatch = useDispatch()
    return (
        <>
         <button onClick={
            ()=>dispatch(decrementar()) 
         }>
            Id - 1
        </button>
        <button onClick={
            ()=> {
                dispatch(decrementarValor(10))
            }
        }>
            Id - 10
        </button>
        </>
    )
}
export default Decrementar