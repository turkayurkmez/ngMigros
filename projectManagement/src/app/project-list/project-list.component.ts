import { Component } from '@angular/core';
import { projects } from '../models/mocks/project.mock';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  projects:Project[] = projects;
  searchKey:string;
}
