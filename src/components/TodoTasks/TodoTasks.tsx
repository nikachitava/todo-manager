import DeleteTask from "../DeleteTask/DeleteTask";
import "./TodoTasks.css";

const TodoTasks: React.FunctionComponent<{
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ tasks, setTasks }) => {
  const handleDelete = (index: number) => {
    const updatedTaskList = [...tasks];
    updatedTaskList.splice(index, 1);
    setTasks(updatedTaskList);
  };

  return (
    <>
      {tasks.map((task: string, index: number) => (
        <div className="task_container" key={index}>
          <p>{task}</p>
          <DeleteTask handleDelete={handleDelete} index={index} />
        </div>
      ))}
    </>
  );
};

export default TodoTasks;
