import { cardListStyle } from "../../../styles/page";
import Card from "./Card";
import { colors } from "../../../signal/ColorSignal";
import { useSignals } from "@preact/signals-react/runtime";
import { useTodosContext } from "../../../context/todosContexts";

const TodosList = () => {
  useSignals();
  const context = useTodosContext();

  const isLoading = context.isLoading;
  const error = context.error;
  const todos = context.todos;

  const colorText = colors.value.text;
  const colorBackground = colors.value.background;

  return (
    <div style={cardListStyle}>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}

      {todos &&
        todos.map((todo, index) => (
          <Card
            key={index}
            todo={todo}
            colors={{ text: colorText, background: colorBackground }}
          />
        ))}
    </div>
  );
};

export default TodosList;
