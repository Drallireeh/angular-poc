import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-input-with-popin',
  templateUrl: './next-input-with-popin.component.html',
  styleUrls: ['./next-input-with-popin.component.less']
})
export class NextInputWithPopinComponent implements OnInit {
  @Input() value!: string;
  @Input() idString!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
