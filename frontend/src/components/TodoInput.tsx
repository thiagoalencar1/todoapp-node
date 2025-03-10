import { useState } from 'react';

interface TodoInputProps {
  onAdd: (title: string) => void;
}

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-8 p-4 bg-white rounded-lg shadow-md">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
      >
        Add Task
      </button>
    </form>
  );
};
