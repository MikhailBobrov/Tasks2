import { status, priority, statusOfPriority } from "./constant";

export const defaultState = {
  tasks: [
    {
      id: Math.floor(Math.random() * 1000),
      item: "Играть",
      completed: false,
      status: status.todo,
      date: new Date(),
      statusOfPriority: statusOfPriority.middle,
    },
    {
      id: Math.floor(Math.random() * 1000),
      item: "Прыгать",
      completed: false,
      status: status.todo,
      date: new Date(),
      statusOfPriority: statusOfPriority.middle,
    },
    {
      id: Math.floor(Math.random() * 1000),
      item: "Бегать",
      completed: false,
      status: status.inprogress,
      date: new Date(),
      statusOfPriority: statusOfPriority.low,
    },
    {
      id: Math.floor(Math.random() * 1000),
      item: "Не играть",
      completed: false,
      status: status.inprogress,
      date: new Date(),
      statusOfPriority: statusOfPriority.middle,
    },
    {
      id: Math.floor(Math.random() * 1000),
      item: "Учиться",
      completed: false,
      status: status.done,
      date: new Date(),
      statusOfPriority: statusOfPriority.high,
    },
  ],
};
