import { useState } from "react";
import { Todo } from "./type";

type Props = {
  onAddTodo: (todo: Todo) => void;
};

function AddTodo({ onAddTodo }: Props) {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTodo({
            id: Date.now(),
            todo: value,
            completed: false,
          });
          setValue("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
