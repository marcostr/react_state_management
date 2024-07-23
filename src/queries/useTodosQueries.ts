import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../services/todosServices";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const useTodosQuery = () => {
  const { data, error, isLoading, refetch } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    enabled: true,
  });

  return { data, error, isLoading, refetch };
};

export default useTodosQuery;
