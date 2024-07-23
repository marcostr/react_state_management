import { TodosProvider } from "../../context/useTodosContextProvider";
import { pageStyle } from "../../styles/page";
import ActionButtons from "./components/ActionButtons";
import Footer from "./components/Footer";
import ListHeader from "./components/ListHeader";
import Navbar from "./components/Navbar";
import TodosList from "./components/TodosList";
import {
  changeTextColor,
  changeBackgroundColor,
  resetColors,
} from "../../signal/ColorSignal";
import { useSignals } from "@preact/signals-react/runtime";

const TodosPage = () => {
  useSignals();

  const onTextColorChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeTextColor(e.currentTarget.value);
  };
  const onBackgroundColorChangeHandle = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    changeBackgroundColor(e.currentTarget.value);
  };
  return (
    <div style={pageStyle}>
      <label>Text</label>
      <input type="color" onChange={onTextColorChangeHandle} />
      <label>Background</label>
      <input type="color" onChange={onBackgroundColorChangeHandle} />
      <button onClick={() => resetColors()}>Reset</button>

      <Navbar />
      <TodosProvider>
        <ListHeader />
        <TodosList />
      </TodosProvider>
      <ActionButtons />
      <Footer />
    </div>
  );
};

export default TodosPage;
