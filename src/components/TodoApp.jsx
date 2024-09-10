import { LuListTodo } from "react-icons/lu";
import { AddTodo, TodoFilter, TodoList } from "./";
const TodoApp = () => {
  return (
    <div className="container m-5 p-2 pb-4 rounded mx-auto bg-stone-700 shadow">
      <h1 className="text-3xl font-bold text-cyan-600 flex gap-4 items-center justify-center mt-4 mb-6">
        <LuListTodo size={36} color="#0891b2" /> Todo List App
      </h1>
      <AddTodo />
      <div className="border-b my-6"></div>
      <TodoFilter />
      <TodoList />
    </div>
  );
};

export default TodoApp;
