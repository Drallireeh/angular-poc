import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'popin-button-virgule',
  templateUrl: './popin-button-virgule.component.html',
  styleUrls: ['./popin-button-virgule.component.less']
})
export class PopinButtonVirguleComponent implements OnInit {

  constructor() { }

  @Input() type!: string; 

  ngOnInit(): void {
  }

}
