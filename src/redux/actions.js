
export const AddNewTask=(task)=>{
    return {type:"ADD_NEW_TASK", payload:task}
}

export const doneTask=(id)=>{
    return {type:"TASK_DONE", payload:id}
}

export const updateTask=(id,task)=>{
    return {type:"UPDATE_TASK", payload:{id:id,task:task}}
}

export const deleteTask=(id)=>{
    return {type:"DELETE_TASK", payload:id}
}