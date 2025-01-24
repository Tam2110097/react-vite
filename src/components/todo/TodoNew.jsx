import { useState } from "react";

const TodoNew = (props) => {
    //useState Hook (getter/setter)
    // const valueInput = "eirc";

    const [valueInput, setValueInput] = useState("eric")

    const { addNewTodo } = props;
    // addNewTodo('tam')

    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }

    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => { handleOnChange(event.target.value) }}
                value={valueInput}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    );
}

export default TodoNew;