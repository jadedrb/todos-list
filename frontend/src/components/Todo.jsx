export default function Todo({ todo, handleComplete, handleDelete }) {
    return (
        <li key={todo._id}>
                <input type="checkbox" checked={todo.completed} onChange={() => handleComplete(todo._id)} />
                {todo.text}
                <button onClick={() => handleDelete(todo._id)}>X</button>
        </li>
    )
}