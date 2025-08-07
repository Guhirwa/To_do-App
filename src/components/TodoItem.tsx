import React from "react";
import type { Todo } from "./types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex justify-between items-center py-2">
      <label className="flex items-center space-x-2 cursor-pointer">
        <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.text}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)} className="bg-gray-300 hover:bg-gray-400 text-white rounded-full p-3" aria-label="Delete todo">
        <img src="src/assets/delete.svg" alt="delete icon" />
      </button>
    </div>
  );
};

export default TodoItem;
