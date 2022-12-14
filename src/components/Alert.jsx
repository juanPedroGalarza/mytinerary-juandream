import { useEffect } from "react"
import { useState } from "react"
import "../styles/Alert.css"
function Alert(props) {
    let [message,setMessage] = useState("")
    let [load,setLoad] = useState("")
    let [wrong,setWrong] = useState("")
    const stop = props.stop
    useEffect(() => {
        if (props.err) {
            setMessage(props.err.data.message)
            setWrong("wrong ")
            setLoad("load ")
        } else if(props.res){
            setMessage(props.res.message)
            if (!props.res.success) {
                setWrong("wrong ")
                setLoad("load ")
            } else{
                setWrong("")
                setLoad("load ")
            }
        }
    }, [props.res, props.err])
    return (
        <div className={`alert-container ${load} ${wrong}`}>
            <p className={`alert-text ${load} ${wrong}`}>{message}</p>
            <button type="button" className={`alert-close ${load} ${wrong}`} onClick={stop}>X</button>
        </div>
    )
}

export default Alert