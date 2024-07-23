import { create } from "zustand";
import useTodosQuery, { Todo } from "../queries/useTodosQueries";
import { useEffect } from "react";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface TodoState {
  todos: Todo[] | null;
  setTodosToNull: () => void;
  addTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
  removeAllTodos: () => void;
  toggleCompleted(id: number): void;
  setTodos: (todos: Todo[]) => void;
}

const useTodoStore = create<TodoState>((set) => ({
  todos: null,
  addTodo: (todo: Todo) =>
    set((state) => ({ todos: [...(state.todos ?? []), todo] })),
  removeTodo: (todo: Todo) =>
    set((state) => ({ todos: state.todos?.filter((t) => t !== todo) })),
  toggleCompleted: (id: number) => {
    set((state) => ({
      todos: state.todos?.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
  setTodosToNull: () => {
    set(() => ({ todos: null }));
  },
  removeAllTodos: () => {
    set(() => ({ todos: [] }));
  },
  setTodos: (todos: Todo[]) => {
    set(() => ({ todos }));
  },
}));

const useTodos = () => {
  const { data, error, isLoading, refetch } = useTodosQuery();
  const {
    todos,
    setTodosToNull,
    addTodo,
    removeTodo,
    toggleCompleted,
    removeAllTodos,
    setTodos,
  } = useTodoStore();

  useEffect(() => {
    if (data && todos === null) {
      setTodos(data);
    }
  }, [data, todos, setTodos]);

  function refetchTodos() {
    setTodosToNull();
    refetch();
  }

  function removeAllTodosInList() {
    removeAllTodos();
  }

  function addTodoList(todo: Todo) {
    addTodo({
      userId: todo.userId,
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    });
  }

  function setToggleCompleted(id: number) {
    toggleCompleted(id);
  }

  return {
    todos,
    addTodoList,
    removeTodo,
    setToggleCompleted,
    removeAllTodosInList,
    refetchTodos,
    isLoading,
    error,
  };
};

if (process.env.NODE_ENV === "development") {
  useTodoStore.subscribe((state) => console.log("useTodoStore", state));
  mountStoreDevtool("useTodoStore", useTodoStore);
}

export default useTodos;
