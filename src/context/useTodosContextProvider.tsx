import { useEffect, useState } from "react";
import useTodos from "../store/useStore";
import { Todo } from "../queries/useTodosQueries";
import { TodosContext, TodosUpdateContext } from "./todosContexts";
import { Filters } from "../models/filtersModel";

export function TodosProvider({ children }: { children: React.ReactNode }) {
  const { todos, isLoading, error } = useTodos();
  const [fiteredTodos, setFilteredTodos] = useState<Todo[]>(todos ?? []);
  const [filter, setFilter] = useState<Filters>("all");

  function updateTodos(value: Filters) {
    setFilter(value);
  }

  useEffect(() => {
    if (filter === "all") {
      setFilteredTodos(todos ?? []);
    } else if (filter === "completed") {
      setFilteredTodos(todos?.filter((todo) => todo.completed) ?? []);
    } else if (filter === "uncompleted") {
      setFilteredTodos(todos?.filter((todo) => !todo.completed) ?? []);
    }
  }, [todos, filter]);
  return (
    <TodosContext.Provider
      value={{ todos: fiteredTodos, isLoading: isLoading, error: error }}>
      <TodosUpdateContext.Provider value={updateTodos}>
        {children}
      </TodosUpdateContext.Provider>
    </TodosContext.Provider>
  );
}
