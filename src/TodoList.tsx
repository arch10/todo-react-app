import { Todo } from "./type";

type Props = {
  todos: Todo[];
};

function TodoList({ todos }: Props) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={todo.id}>
          {index + 1}. {todo.todo}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
