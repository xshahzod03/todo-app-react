import { useState } from "react";

interface TaskFormProps {
  onAddTask: (description: string, deadline: string) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim() || !deadline.trim()) {
      alert("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }
    onAddTask(description, deadline);
    setDescription("");
    setDeadline("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Vazifa tavsifi"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Qo‘shish</button>
    </form>
  );
};

export default TaskForm;
