import TodoItem from "./TodoItem"
import { useState, useRef } from "react"
import Card from "./Card"
import classes from './Todolist.module.css'

const TodoList = () => {
    const [todo,settodo] = useState([])
    const todoadded = useRef()

    const handleClick = (event) => {
        settodo([...todo,todoadded.current.value])
        todoadded.current.value =''
        
    }
    const deleteItem = (index) => {
        settodo(todo=>todo.filter((elt,i)=>i!==index))
    }
    return <div>
            <Card title="u have to do : ">
            <div className={classes.form}>
            <label htmlFor="add">add TodoItem : </label>
            <input ref={todoadded} />
            <button onClick={handleClick} style={{fontSize:"large",marginLeft:"30px"}} >Add !</button>
            </div>
            <div className={classes.list}>
            {todo.map((todo,index)=><TodoItem key={index} index={index} todoItem={todo} click={deleteItem}/>)}
            </div>
            </Card>
    </div>
}

export default TodoList