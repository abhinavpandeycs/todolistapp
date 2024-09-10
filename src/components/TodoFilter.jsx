import { useTodo } from "../contexts";
const TodoFilter = () => {
  const { filter, setFilter } = useTodo();
  return (
    <div className="m-1 p-3 px-5 mb-20 flex justify-end">
      <div className="flex items-center custom-select">
        <label className="text-cyan-600 font-semibold text-xl my-2 pr-2">
          Filter
        </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="appearance-none outline-none cursor-pointer px-3 py-1 rounded bg-cyan-600 text-white"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilter;
