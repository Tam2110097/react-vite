import { useState } from "react";

const TodoData = (props) => {

    const [valueTodo, setValueTodo] = useState()

    const handleClick = (id) => {
        deleteTodo(id)
    }

    const { todoList, deleteTodo } = props;
    console.log('>>>>check todoList: ', todoList)
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className={`todo-item`} key={item.id}>
                        <div>{item.name}</div>
                        <button
                            onClick={() => { handleClick(item.id) }}
                            style={{ cursor: "pointer" }}
                        >Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default TodoData;