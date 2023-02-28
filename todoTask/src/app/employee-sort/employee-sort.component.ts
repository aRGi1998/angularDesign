import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-sort',
  templateUrl: './employee-sort.component.html',
  styleUrls: ['./employee-sort.component.css']
})
export class EmployeeSortComponent {
  employees = ['John', 'Alice', 'Bob', 'David'];
  sortEmployees() {
    this.employees.sort();
  }  
}
