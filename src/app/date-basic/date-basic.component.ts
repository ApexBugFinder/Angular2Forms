import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'obasi-date-basic',
  templateUrl: './date-basic.component.html',
  styleUrls: ['./date-basic.component.css']
})
export class DateBasicComponent implements OnInit {

  startDate: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
