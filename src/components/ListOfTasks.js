import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doneTask } from '../redux/actions'
import NewInput from './NewInput'

function ListOfTasks() {
    const dispatch = useDispatch()
    const {tasks} = useSelector(state => state)
    
    return (
        <div>
            <h1> tasks done</h1>
            <p>
                {tasks.filter(el=>el.done).map(el=> <div> <p style={{textDecoration:"line-through"}}> {el.text} </p> 
                <button onClick={()=>dispatch(doneTask(el.id))}> Not Done Yet </button> </div>)}
            </p>
            <h1> tasks not done yet </h1>
            <p>
                {tasks.filter(el=>!el.done).map(el=> <NewInput id={el.id} text={el.text} done={el.done} />)}
            </p>
        </div>
    )
}

export default ListOfTasks
