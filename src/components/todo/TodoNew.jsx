
const TodoNew = (props) => {
    console.log('>>>>>>>check props todo new: ', props)
    const { addNewTodo } = props;
    addNewTodo('tam')
    return (
        <div className="todo-new">
            <input type="text" />
            <button>Add</button>
        </div>
    );
}

export default TodoNew;