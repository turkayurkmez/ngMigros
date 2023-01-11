import { Component } from '@angular/core';
import { projects } from '../models/mocks/project.mock';
import { Project } from '../models/project.model';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

  constructor(private projectService: ProjectsService){}

  ngOnInit(){
    this.projectService.getProjects()
                       .subscribe(data=> this.projects = data);
  }

  projects:Project[];
  searchKey:string;
}
