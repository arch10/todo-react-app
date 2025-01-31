import { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { Todo } from "./type";
import { Provider } from "react-redux";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div>
          <div>Todo App</div>
          <TodoList todos={todos} />
          <AddTodo onAddTodo={(t) => setTodos([...todos, t])} />
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
