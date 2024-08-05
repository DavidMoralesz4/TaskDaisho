import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/tasks/tasksSlice";
import { Task } from "../interfaces";

type Props = {
  active: boolean;
  onClose: () => void;
};

const TaskForm = ({ active, onClose }: Props) => {
  const [inputs, setInputs] = useState<Task>({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();

  if (!active) return <></>;

  const handleInputsChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(addTask({ title: inputs.title, description: inputs.description }));
    onClose();
    setInputs({ title: "", description: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="modalCreateTask">
        <div className="container-modal2 bg-primary">
          <div>
            <h2>Create new Task</h2>
            <hr />

            <div className="container-modal3">
              <div className="container-1">
                <label className="form-label mt-4">Enter name for task</label>
                <input
                  type="text"
                  name="title"
                  value={inputs.title}
                  onChange={(event) => handleInputsChange(event)}
                  className="form-control"
                  id="examp"
                  placeholder="Go to running..."
                />
              </div>

              <div className="container-2">
                <label className="form-label mt-4">Description: </label>
                <textarea
                  className="form-control"
                  data-lt-tmp-id="lt-894152"
                  value={inputs.description}
                  name="description"
                  onChange={(event) => handleInputsChange(event)}
                  data-gramm="false"
                  placeholder="Enter a description..."
                ></textarea>
              </div>

              <div className="container-3">
                  <label htmlFor="image">Upload Image:</label>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    // onChange={handleFileChange}
                  />
                </div>
            </div>

            <div className="button">
              <button type="submit" className="btn btn-secondary">
                Add task
              </button>
              <span onClick={() => onClose()} className="close-span">
                close
              </span>
              <div>
                <hr className="close-hr" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
