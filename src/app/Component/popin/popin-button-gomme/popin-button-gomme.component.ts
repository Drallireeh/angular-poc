import { Component, OnInit, Input } from '@angular/core';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'popin-button-gomme',
  templateUrl: './popin-button-gomme.component.html',
  styleUrls: ['./popin-button-gomme.component.less']
})
export class PopinButtonGommeComponent implements OnInit {

  constructor() { }

	faEraser = faEraser;

  ngOnInit(): void {
  }
}
