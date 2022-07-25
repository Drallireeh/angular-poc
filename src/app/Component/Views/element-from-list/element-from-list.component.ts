import { Component, Input, OnInit } from '@angular/core';
import { ElementFromListInterface } from '../../../element-from-list-interface';
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-element-from-list',
  templateUrl: './element-from-list.component.html',
  styleUrls: ['./element-from-list.component.less']
})
export class ElementFromListComponent implements OnInit {
  @Input() element!: ElementFromListInterface;

  faEdit = faEdit;
	faRemove = faRemove;

  constructor() { }

  ngOnInit(): void {
  }

}
