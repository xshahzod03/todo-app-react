interface Task {
  id: number;
  description: string;
  deadline: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }: TaskListProps) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.description} - {task.deadline}
          </span>
          <button onClick={() => onToggleComplete(task.id)}>
            {task.completed ? "Bekor qilish" : "Bajarildi"}
          </button>
          <button onClick={() => onDeleteTask(task.id)}>🗑️</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
