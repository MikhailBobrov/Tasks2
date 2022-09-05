import { status, priority } from "./constant";

export const defaultState = {
  tasks: [
    {
      id: Math.floor(Math.random() * 1000),
      item: "Пример 1",
      completed: false,
      status: status.todo,
      date: new Date(),
      priority: priority.low,
    },
    {
      id: Math.floor(Math.random() * 1000),
      item: "Пример 1",
      completed: false,
      status: status.todo,
      date: new Date(),
      priority: priority.low,
    },
    {
      id: Math.floor(Math.random() * 1000),
      item: "Пример 2",
      completed: false,
      status: status.inprogress,
      date: new Date(),
      priority: priority.low,
    },
    {
      id: Math.floor(Math.random() * 1000),
      item: "Пример 2",
      completed: false,
      status: status.inprogress,
      date: new Date(),
      priority: priority.middle,
    },
    {
      id: Math.floor(Math.random() * 1000),
      item: "Пример 3",
      completed: false,
      status: status.done,
      date: new Date(),
      priority: priority.high,
    },
  ],
};
