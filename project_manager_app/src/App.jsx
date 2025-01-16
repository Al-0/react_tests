import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    projectSelectedId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: null,
      };
    });
  }

  function handleCancel() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: id,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        projectSelectedId: newProject.id,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id != prevState.projectSelectedId
        ),
      };
    });
  }

  function handleAddTask(taskText) {
    setProjectsState((prevState) => {
      const newTask = {
        text: taskText,
        projectId: prevState.projectSelectedId,
        id: Math.random(),
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id != taskId),
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={projectsState.projects}
        onSelect={handleSelectProject}
        onStartAddProject={handleStartAddProject}
        selectedProjectId={projectsState.projectSelectedId}
      />
      {projectsState.projectSelectedId === undefined && (
        <NoProjectSelected onStartAddProject={handleStartAddProject} />
      )}
      {projectsState.projectSelectedId === null && (
        <NewProject onNewProject={handleAddProject} onCancel={handleCancel} />
      )}
      {projectsState.projectSelectedId && (
        <SelectedProject
          onSaveTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
          onDelete={handleDeleteProject}
          tasks={projectsState.tasks}
          projectInfo={projectsState.projects.find(
            (project) => project.id === projectsState.projectSelectedId
          )}
        />
      )}
    </main>
  );
}

export default App;
