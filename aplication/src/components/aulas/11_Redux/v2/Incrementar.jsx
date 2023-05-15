import { useDispatch } from "react-redux"
import { incrementar, incrementarValor } from "./slice/idSlice"

const Incrementar = () => {

    const dispatch = useDispatch()
    return (
        <>
        <button onClick={
            ()=> {
                dispatch(incrementar())
            }
        }>
            Id + 1
        </button>
        <button onClick={
            ()=> {
                dispatch(incrementarValor(10))
            }
        }>
            Id + 10
        </button>
        </>
    )
}
export default Incrementar