const dataMock = {
  tasks: {
    "task-1": { id: "task-1", content: "Login page – performance issues" },
    "task-2": { id: "task-2", content: "Sprint bugfix" },
    "task-3": { id: "task-3", content: "Shop page – performance issues" },
    "task-4": { id: "task-4", content: "Checkout bugfix" },
    "task-5": { id: "task-5", content: "Shop bug1" },
    "task-6": { id: "task-6", content: "Shop bug2" },
    "task-7": { id: "task-7", content: "Shop bug3" },
    "task-8": { id: "task-8", content: "Shop bug4" },
    "task-9": { id: "task-9", content: "Shop bug5" },
    "task-10": { id: "task-10", content: "User page – performance issues" },
    "task-11": { id: "task-11", content: "Auth bugfix" },
    "task-12": { id: "task-12", content: "Main page – performance issues" },
    "task-13": { id: "task-13", content: "Main page bugfix" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Backlog",
      tasksOrder: ["task-1", "task-2"],
      isEditing: false,
    },
    "column-2": {
      id: "column-2",
      title: "Planning",
      tasksOrder: ["task-3", "task-4", "task-5", "task-6", "task-7", "task-8", "task-9"],
      isEditing: false,
    },
    "column-3": {
      id: "column-3",
      title: "Doing",
      tasksOrder: ["task-10", "task-11"],
      isEditing: false,
    },
    "column-4": {
      id: "column-4",
      title: "Done",
      tasksOrder: ["task-12", "task-13"],
      isEditing: false,
    },
  },
  columnsOrder: ["column-1", "column-2", "column-3", "column-4"],
};

export default dataMock;