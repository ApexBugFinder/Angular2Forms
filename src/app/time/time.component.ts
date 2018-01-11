import { Component, OnInit } from '@angular/core';
import { TimepickerConfig } from 'ngx-bootstrap/timepicker/timepicker.config';

@Component({
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  startDate:  Date;
  startTime: Date;
  ismeridian = true;
  constructor(private timepickerConfig: TimepickerConfig) { }

  ngOnInit() {
    this.startTime = new Date('Oct 1 2017 3:00 PM');
  }
  toggleMode() {
    console.log(this.timepickerConfig.showMeridian);
    this.ismeridian = !this.ismeridian;

  }
}
