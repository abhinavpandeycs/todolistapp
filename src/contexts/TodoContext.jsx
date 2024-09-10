import { createContext, useContext, useEffect, useState } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todos) => {},
  updateTodo: (id, todos) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
  filter: "all",
  setTodoFilter: (filter) => {},
});

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
