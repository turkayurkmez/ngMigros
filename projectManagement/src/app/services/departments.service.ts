import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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

      let option = {
         headers:new HttpHeaders({
            'Content-Type':'application/json',
            'Authentication': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlTDvHJrYXkgw5xya21leiIsImlhdCI6MTUxNjIzOTAyMiwibWFpbCI6InR1cmtheS51cmttZXpAZGluYW1pa3ppaGluLmNvbSJ9.lF1N0EOg1plElYqi2fngYBULhIW47k3ccvnt69QPpis'
         })
      }
      return this.httpClient.post(this.url,department,option)
                            .pipe(catchError((err:HttpErrorResponse)=>{
                                    console.log(err.message);
                                    return throwError(()=>new Error(err.statusText))
                            }))
  }

}
