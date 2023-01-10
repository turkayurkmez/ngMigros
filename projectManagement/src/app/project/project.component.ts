import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project.model';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, AfterContentChecked {

  ngAfterContentChecked(): void {
    this.incompletedTaskCount = this.project?.tasks?.filter(t=>!t.isDone).length;
    this.isTaskFound = this.incompletedTaskCount != undefined && this.incompletedTaskCount>0;
  }
  
  ngOnInit(): void {
    // this.incompletedTaskCount = this.project?.tasks?.filter(t=>!t.isDone).length;
  }

  @Input('activeProject') project? : Project;

  incompletedTaskCount?:number;
  isTaskFound:boolean;


}
