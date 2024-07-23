import axios from "axios";
import { Todo } from "../queries/useTodosQueries";

export const fetchTodos = () =>
  axios
    .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.data);
