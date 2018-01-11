import { Component } from '@angular/core';
import { Employee } from './models/employee.model';
import { FormPoster } from './services/form-poster.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { DatepickerConfig } from 'ng2-bootstrap/datepicker/datepicker.config';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TimepickerConfig } from 'ngx-bootstrap/timepicker/timepicker.config';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'obasi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor() {
  }

}
