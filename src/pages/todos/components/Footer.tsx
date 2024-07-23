import useTodos from "../../../store/useStore";
import { footerStyle } from "../../../styles/page";

const Footer = () => {
  const { todos } = useTodos();
  return <div style={footerStyle}>Number of todos: {todos?.length}</div>;
};

export default Footer;
