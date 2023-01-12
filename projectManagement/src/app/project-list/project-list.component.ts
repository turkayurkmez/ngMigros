import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../models/mocks/project.mock';
import { Project } from '../models/project.model';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

  constructor(private projectService: ProjectsService,
              private activeRoute: ActivatedRoute){}

  ngOnInit(){
    this.projectService.getProjects()
                       .subscribe(data=> {
                        this.allProjects = data

                        this.activeRoute.params.subscribe(routeData=> {
                          console.log(routeData['id']);
                          this.projects = routeData["id"] != undefined ? 
                                            this.allProjects.filter(p=>p.departmentId == routeData["id"])
                                            :
                                            this.allProjects;
                      });

                      
                      });

    
  }

  projects:Project[];
  allProjects:Project[];

  searchKey:string;
}
