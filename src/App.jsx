import TodoApp from "./components/TodoApp";
import { TodoProvider } from "./contexts";

function App() {
  return (
    <>
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </>
  );
}

export default App;
