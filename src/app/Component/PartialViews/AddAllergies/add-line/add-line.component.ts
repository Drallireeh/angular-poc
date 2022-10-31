import { Component, Input, OnInit } from '@angular/core';
import { MedicamentAllergie } from 'src/app/medicament-allergie-interface';

@Component({
  selector: 'app-add-line',
  templateUrl: './add-line.component.html',
  styleUrls: ['./add-line.component.less']
})
export class AddLineComponent implements OnInit {
  @Input() med!: MedicamentAllergie;

  constructor() { }

  ngOnInit(): void {
  }
}
