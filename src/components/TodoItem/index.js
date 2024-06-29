// Write your code here
import './index.css'
const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <div>
      <li className="todo-list">
        <p className="todo-item">{title}</p>
        <button
          className="button"
          type="button"
          onClick={onDelete}
          data-testid="delete"
        >
          Delete
        </button>
      </li>
    </div>
  )
}
export default TodoItem
