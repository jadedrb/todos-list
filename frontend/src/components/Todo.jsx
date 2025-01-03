import styles from './todo.module.css'

export default function Todo({ todo, handleComplete, handleDelete }) {
    return (
        <li key={todo._id} className={styles.todo}>
                <input type="checkbox" checked={todo.completed} onChange={() => handleComplete(todo._id)} />
                {todo.text}
                <button onClick={() => handleDelete(todo._id)}>X</button>
        </li>
    )
}