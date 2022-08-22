import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-allergie',
  templateUrl: './update-allergie.component.html',
  styleUrls: ['./update-allergie.component.less']
})
export class UpdateAllergieComponent implements OnInit {
  dateValue:Date = new Date(2022, 10, 10);

  constructor() { }

  ngOnInit(): void {
  }

}
