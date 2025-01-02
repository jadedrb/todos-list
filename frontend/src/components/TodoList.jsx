import Todo from "./Todo";

export default function TodoList({ todos, handleDelete, handleComplete }) {
    return (
        <ul>
            {todos.map(todo => 
                <Todo 
                    key={todo._id}
                    todo={todo} 
                    handleDelete={handleDelete}
                    handleComplete={handleComplete}
                />
            )}
        </ul>
    )
}