import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faRemove, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-actions-from-list',
  templateUrl: './actions-from-list.component.html',
  styleUrls: ['./actions-from-list.component.less']
})
export class ActionsFromListComponent implements OnInit {
  @Input() titleUpdateBtn: string = "update";
  @Input() titleDeleteBtn: string = "delete";
  @Input() titleOtherBtn!: string;
  @Input() otherBtnIcon!: string;

  faEdit = faEdit;
  faRemove = faRemove;
  faCode = faCode;

  constructor() { }

  ngOnInit(): void {
  }

}
