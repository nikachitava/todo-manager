import { AiFillDelete } from "react-icons/ai";
import "./DeleteTask.css";

const DeleteTask: React.FunctionComponent<{
  handleDelete: (index: number) => void;
  index: number;
}> = ({ handleDelete, index }) => {
  return (
    <div className="delete_button" onClick={() => handleDelete(index)}>
      <AiFillDelete />
    </div>
  );
};

export default DeleteTask;
