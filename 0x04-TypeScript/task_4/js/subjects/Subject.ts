// task_4/js/Subject.ts
import { Subjects } from "./Teacher";

export namespace Subjects {
  export class Subject {
    protected teacher!: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}