import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../models/department.model';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export default class AddProjectComponent implements OnInit {
  constructor(private departmentService: DepartmentsService,
    private builder: FormBuilder) { }


  departments: Department[];

  ngOnInit() {

    this.addProjectForm = this.builder.group({
      name: ['', [Validators.required, 
                  Validators.minLength(3)]
            ],
      description: ['', Validators.required],
      departmentId: ['', Validators.required]

    });

    
    this.departmentService.getDepartments()
      .subscribe(data => this.departments = data);
  }


  checkName(): boolean | undefined {
    return this.addProjectForm.get('name')?.hasError('required') &&
      this.addProjectForm.get('name')?.dirty;
  }

  checkNameLength(): boolean | undefined {
    return this.addProjectForm.get('name')?.hasError('minLength') &&
      this.addProjectForm.get('name')?.dirty;
  }

  checkDescription(): boolean | undefined {
    return this.addProjectForm.get('description')?.hasError('required') &&
      this.addProjectForm.get('description')?.dirty;
  }

  checkDepartment(): boolean | undefined {
    return this.addProjectForm.get('departmentId')?.hasError('required') &&
      this.addProjectForm.get('departmantId')?.dirty;
  }



  addProjectForm: FormGroup;
  async addProject() {
    if (this.addProjectForm.valid) {
      console.log('proje bilgisi:', this.addProjectForm.value);
    }
  }
}
