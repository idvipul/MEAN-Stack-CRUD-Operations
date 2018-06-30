import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";

import { EmployeeService } from '../shared/employee.service';
import {Employee} from "../shared/employee.model";

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEmpoyeeList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    // reset form fields
    this.employeeService.selctedEmployees = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: null
    }
  }

  onSubmit(form : NgForm) {
    // insert new employee into MongoDB -- consume post request from Node.js
    // create a function inside employee service class
    this.employeeService.postEmployee(form.value).subscribe((res) => {
      this.resetForm(form);
      M.toast({html: 'Saved successfully!', classes: 'rounded'});
    });
  }

  refreshEmpoyeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

}
