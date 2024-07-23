import useTodos from "../../../store/useStore";
import { navbarStyle } from "../../../styles/page";

const Navbar = () => {
  const { todos, refetchTodos } = useTodos();

  const todosLength = todos?.length;

  function reloadHandler() {
    refetchTodos();
  }

  return (
    <div style={navbarStyle}>
      <p> Number of Todos: {todosLength ?? 0}</p>
      <button onClick={reloadHandler}>Reload</button>
    </div>
  );
};

export default Navbar;
