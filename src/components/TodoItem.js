import classes from "./TodoItem.module.css"


const TodoItem = (props) => {
    const handleClick = () =>{
        props.click(props.index)
    }
    return <div className={classes.todoItem}>
            <div className="row">

        <span className="col-11">{props.index}-{props.todoItem}</span><span className="col" onClick={handleClick}>&times;</span>
            </div>
        
    </div>
}



export default TodoItem