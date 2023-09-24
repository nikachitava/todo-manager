import "./AddTask.css";

const AddTask: React.FunctionComponent<{ handleAddTask: () => void }> = ({
  handleAddTask,
}) => (
  <div className="add_task_button" onClick={handleAddTask}>
    ADD TASK
  </div>
);

export default AddTask;
