import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500 cursor-pointer"
        />
        <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'} font-medium transition-all duration-200`}>
          {todo.title}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400">
          {new Date(todo.createdAt).toLocaleDateString()}
        </span>
        <button
          onClick={() => onDelete(todo.id)}
          className="ml-4 px-3 py-1.5 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
