import AddTask from "../AddTask/AddTask";
import { useState } from "react";
import "./InputTask.css";
import TodoTasks from "../TodoTasks/TodoTasks";

export default function InputTask() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const hanldeTaskInput = (e: any) => {
    setTask(e.target.value);
  };
  const handleAddTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <>
      <div className="add_task_container">
        <input
          className="add_task_input"
          type="text"
          value={task}
          onChange={hanldeTaskInput}
        />
        <AddTask handleAddTask={handleAddTask} />
      </div>
      <div className="todo_tasks">
        <TodoTasks tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}
