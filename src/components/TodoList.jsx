import { TodoItem } from "./";
import { useTodo } from "../contexts";

const TodoList = () => {
  const { todos } = useTodo();
  return (
    <div className="w-full">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
