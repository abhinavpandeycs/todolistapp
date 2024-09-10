import { useState } from "react";
import { useTodo } from "../contexts";
import { PiHandTapLight } from "react-icons/pi";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <div className="relative w-full sm:max-w-2xl sm:mx-auto">
      <div className="overflow-hidden z-0 rounded-full relative border">
        <form
          onSubmit={handleAddTodo}
          className="relative flex z-50 bg-white rounded-full"
        >
          <input
            type="text"
            placeholder="Write Todo..."
            className="rounded-full flex-1 px-6 py-0 text-gray-700 focus:outline-none"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="bg-cyan-600 text-white rounded-full font-semibold px-8 py-2 hover:bg-cyan-500 focus:bg-cyan-700 focus:outline-none flex items-center justify-center">
            <PiHandTapLight size={26} /> Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
