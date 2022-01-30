const TodoItem = props => {
  const {item, deleteTodo} = props
  const {title} = item

  const deleteTodoItem = () => {
    console.log(item.id)
    console.log('Hello')
    deleteTodo(item.id)
  }

  return (
    <li className="todo-item-container">
      <p className="para">{title}</p>
      <button className="button" type="button" onClick={deleteTodoItem}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
