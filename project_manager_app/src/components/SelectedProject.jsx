import Tasks from "./Tasks";

export default function SelectedProject({
  projectInfo,
  onDelete,
  onSaveTask,
  onDeleteTask,
  tasks
}) {
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600">
            {projectInfo.title}
          </h1>
          <button
            onClick={onDelete}
            className="text-stone-600 hover:text-stone-950"
          >
            DELETE
          </button>
        </div>
        <p className="mb-4 text-stone-400">
          {new Date(projectInfo.dueDate).toLocaleDateString("")}
        </p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {projectInfo.description}
        </p>
      </header>
      <Tasks
        onSaveTask={onSaveTask}
        onDeleteTask={onDeleteTask}
        tasks={tasks.filter((task) => task.projectId === projectInfo.id)}
      />
    </div>
  );
}
