import { useState } from "react";
import { useTodo } from "../contexts";
import { FaRegSave, FaEdit, FaRegTrashAlt } from "react-icons/fa";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-2 mb-2 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-cyan-600" : "bg-white"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <button
        className="inline-flex w-8 h-8 rounded-lg text-white text-sm border border-black/10 justify-center items-center bg-cyan-700 hover:bg-cyan-600 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? <FaRegSave size={20} /> : <FaEdit size={20} />}
      </button>
 
      <button
        className="inline-flex w-8 h-8 rounded-lg text-white text-sm border border-black/10 justify-center items-center bg-cyan-700 hover:bg-cyan-600 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        <FaRegTrashAlt size={20} />
      </button>
    </div>
  );
};

export default TodoItem;
