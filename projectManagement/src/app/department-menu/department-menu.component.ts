import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { departments } from '../models/mocks/department.mock';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-department-menu',
  templateUrl: './department-menu.component.html',
  styleUrls: ['./department-menu.component.css']
})
export class DepartmentMenuComponent implements OnInit {
  constructor(private departmentService: DepartmentsService){    

  }
  ngOnInit(): void {
  
    this.departmentService.getDepartments()
                          .subscribe(data=>this.departments=data);
  }


  departments: Department[];
}
