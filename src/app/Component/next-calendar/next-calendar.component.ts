import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'next-calendar',
  templateUrl: './next-calendar.component.html',
  styleUrls: ['./next-calendar.component.less']
})
export class NextCalendarComponent implements OnInit {

  constructor() { }

  @Output() changeDate = new EventEmitter<string>();
  ngOnInit(): void {
  }

  onChange(value: string) {
    this.changeDate.emit(value);
  }
}
