import { Director, Teacher, DirectorInterface, TeacherInterface } from "./main";

export function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}