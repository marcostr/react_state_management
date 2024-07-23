import React from "react";
import { headerListStyle } from "../../../styles/page";
import { filtersGuard } from "../../../guards/filtersGuard";
import {
  useTodosContext,
  useTodosContextUpdate,
} from "../../../context/todosContexts";
import { FILTERS } from "../../../models/filtersModel";

const ListHeader = () => {
  const context = useTodosContext();
  const setFilteredTodos = useTodosContextUpdate();
  const filteredLength = context.todos.length;
  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (filtersGuard(value)) {
      setFilteredTodos(value);
    }
  };
  return (
    <div style={headerListStyle}>
      <p>Total todos: {filteredLength}</p>
      <select onChange={selectHandler}>
        {FILTERS.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListHeader;
