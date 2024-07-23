import useTodos from "../../../store/useStore";
import { buttonContainerStyle } from "../../../styles/page";

const ActionButtons = () => {
  const { todos, addTodoList, removeAllTodosInList } = useTodos();
  function addTodoHandler() {
    addTodoList({
      id: todos?.length ? todos?.length + 1 : 0,
      userId: 42,
      title: "title ",
      completed: false,
    });
  }
  function deleteAllTodoHandler() {
    removeAllTodosInList();
  }
  return (
    <div style={buttonContainerStyle}>
      <button onClick={addTodoHandler}>Add todo</button>
      <button onClick={deleteAllTodoHandler}>Delete all todos</button>
    </div>
  );
};
export default ActionButtons;
