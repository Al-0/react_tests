import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onNewProject, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    const newProject = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };

    onNewProject(newProject);
  }

  return (
    <>
      <Modal ref={modal} caption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid input</h2>
        <p className="text-stone-400 mb-4">All fields must contain data</p>  
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button 
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label={"Title"} />
          <Input ref={description} label={"Description"} isTextArea />
          <Input type="date" ref={dueDate} label={"Due Date"} />
        </div>
      </div>
    </>
  );
}
