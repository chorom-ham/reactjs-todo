import styled from "styled-components";
import Todo from "./Todo";

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ todoList, setTodoList }) {
  function handleToggleTodo(todo) {
    const updatedTodoes = todoList.map((t) =>
      t.id == todo.id ? { ...t, done: !t.done } : t
    );
    setTodoList(updatedTodoes);
  }
  return (
    <ul>
      {todoList.map((todo) => (
        <li
          onClick={() => handleToggleTodo(todo)}
          style={{ textDecoration: todo.done ? "line-through" : "" }}
          key={todo.id}
        >
          {todo.text}
          <todoList todo={todo} setTodoList={setTodoList} />
        </li>
      ))}
    </ul>
  );
}
