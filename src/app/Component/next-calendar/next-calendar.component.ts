import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'next-calendar',
  templateUrl: './next-calendar.component.html',
  styleUrls: ['./next-calendar.component.less']
})
export class NextCalendarComponent implements OnInit {

  constructor() { }

  @Output() changeDate = new EventEmitter<any>();
  ngOnInit(): void {
  }

  onChange(value: any) {
    console.log(value, new Date(value))
    this.changeDate.emit(new Date(value));
  }
}
