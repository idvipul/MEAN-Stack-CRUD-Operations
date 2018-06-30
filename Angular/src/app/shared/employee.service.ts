import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // selectedEmployee variable is of Employee model class -- selectedEmployee property designs insert and update operation in form
  selctedEmployees: Employee;
  // array of employees as Employees -- save employees collection into employee array variable
  employees: Employee[];

  // make a post request
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  // insert into MongoDB - parameter emp is of the type Employee model class
  postEmployee(emp: Employee) {
    // make an http post request in Node.js project
    return this.http.post(this.baseURL, emp);
  }
}
