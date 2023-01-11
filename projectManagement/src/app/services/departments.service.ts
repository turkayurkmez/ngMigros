import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private httpClient: HttpClient) { }
  url:string = 'https://localhost:7125/api/Departments';

  getDepartments():Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.url)
                          .pipe(catchError((err:HttpErrorResponse)=>{
                            console.log(err.message);
                            return throwError(()=>new Error(err.statusText))
                          }));
  }

  addDepartment(department: Department):Observable<Department>{
      return this.httpClient.post(this.url,department)
                            .pipe(catchError((err:HttpErrorResponse)=>{
                                    console.log(err.message);
                                    return throwError(()=>new Error(err.statusText))
                            }))
  }

}
