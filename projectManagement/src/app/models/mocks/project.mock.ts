import { Project } from "../project.model";
import { Task } from "../task.model";

export const projects: Project[] = [
    new Project(1, 'Project a', 'Description of Project A', new Date(2023,1,10),0.10,[
        new Task(1,'Task A', 'Description of Task A', new Date(2023,2,15),1,false),
        new Task(2,'Task B', 'Description of Task B', new Date(2023,2,15),1,false),
        new Task(3,'Task C', 'Description of Task C', new Date(2023,2,15),1,true),

    ],1),

    new Project(2, 'pRoject b', 'Description of Project B', new Date(2023,1,10),0.10,[
        new Task(1,'Task A', 'Description of Task A', new Date(2023,2,15),2,false),
        new Task(2,'Task B', 'Description of Task B', new Date(2023,2,15),2,true),
        new Task(3,'Task C', 'Description of Task C', new Date(2023,2,15),2,false),

    ],2),

    new Project(3, 'PROJECT D', 'Description of Project D', new Date(2023,1,10),0.10,[
        new Task(1,'Task A', 'Description of Task A', new Date(2023,2,15),3,false),
        new Task(2,'Task B', 'Description of Task B', new Date(2023,2,15),3,false),
        new Task(3,'Task C', 'Description of Task C', new Date(2023,2,15),3,false),

    ],3)
]