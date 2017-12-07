import { Component } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'obasi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'obasi';
  languages = ['English', 'Mandarin', 'Other'];
  model = new Employee('Reina', 'Roberts');

  lastNameToUpper(value: string) {
    if (value.length > 0) {
      this.model.lastName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.lastName = value;
    }

  }
}
