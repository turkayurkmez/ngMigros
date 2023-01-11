import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {


  constructor(private departmentService: DepartmentsService){}

  department: Department = new Department();
  submitForm(form: NgForm){
     if (form.valid) {
      console.log('form değeri',form.value);
      this.department = form.value;
      this.departmentService.addDepartment(this.department)
                            .subscribe(x=>console.log(x.name + " departmanı eklendi"));
     }
    
  }

}
