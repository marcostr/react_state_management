import { createContext, useContext } from "react";
import { Todo } from "../queries/useTodosQueries";
import { Filters } from "../models/filtersModel";
interface TodosContextProps {
  todos: Todo[];
  isLoading: boolean;
  error: Error | null;
}
export const TodosContext = createContext<TodosContextProps>({
  todos: [],
  isLoading: false,
  error: null,
});
export const TodosUpdateContext = createContext<(value: Filters) => void>(
  () => {}
);

export function useTodosContext() {
  return useContext(TodosContext);
}
export function useTodosContextUpdate() {
  return useContext(TodosUpdateContext);
}
