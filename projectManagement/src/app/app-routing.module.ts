import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import AddProjectComponent from './add-project/add-project.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {path:'', component: ProjectListComponent},
  {path:'tumProjeler', component: ProjectListComponent},
  {path:'projeEkle', component: AddProjectComponent, canActivate:[LoginGuard] },
  {path:'departmanEkle', component: AddDepartmentComponent, canActivate:[LoginGuard]},
  {path:'login', component:LoginComponent},
  {path:'projeler/kategori/:id', component:ProjectListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
