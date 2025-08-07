import React, { useState } from "react";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-6">
      <input type="text" placeholder="Add todo..." value={text} onChange={(e) => setText(e.target.value)}
        className="w-full p-3 rounded-full border focus:outline-none"
      />
      <button type="submit" className="bg-[#096d66] hover:bg-green-600 text-white p-3 rounded-full" aria-label="Add todo">
        <span className="text-lg"> + </span>
      </button>
    </form>
  );
};

export default TodoInput;
