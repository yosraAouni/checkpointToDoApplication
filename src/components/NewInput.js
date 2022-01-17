import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask, updateTask } from '../redux/actions'

function NewInput({id,text,done}) {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    return (
        <div>
            <div> <p> {text} </p> 
                <button onClick={()=>dispatch(doneTask(id))} > Done </button> 
                <input onChange={(e)=>setInput(e.target.value)} type="text"/> 
                
                <button onClick={()=>dispatch(updateTask(id,input))}> submit </button>
                <button onClick={()=>dispatch(deleteTask(id))}> Delete </button> </div>
        </div>
    )
}

export default NewInput
