import { cardStyle, cardTitleStyle } from "../../../styles/page";
import { Todo } from "../../../queries/useTodosQueries";
import useTodos from "../../../store/useStore";
import { Colors } from "../../../signal/ColorSignal";
import { useSignals } from "@preact/signals-react/runtime";

interface CardProps {
  todo: Todo;
  colors: Colors;
}

const Card = ({ todo, colors }: CardProps) => {
  useSignals();
  const { setToggleCompleted } = useTodos();

  const titleStyle = {
    color: colors.text,
    backgroundColor: colors.background,
  };

  return (
    <div style={cardStyle}>
      <div style={cardTitleStyle}>
        user: {todo.userId} - id: {todo.id}
      </div>
      <div style={titleStyle}>{todo.title}</div>
      <div>
        Completed:
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            setToggleCompleted(todo.id);
          }}
        />
      </div>
    </div>
  );
};

export default Card;
