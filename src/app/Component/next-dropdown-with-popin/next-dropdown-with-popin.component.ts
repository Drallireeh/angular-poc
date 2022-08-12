import { Component, Input, OnInit } from '@angular/core';
import { DropdownOption } from '../../dropdown-option';

@Component({
  selector: 'app-next-dropdown-with-popin',
  templateUrl: './next-dropdown-with-popin.component.html',
  styleUrls: ['./next-dropdown-with-popin.component.less']
})
export class NextDropdownWithPopinComponent implements OnInit {
	@Input() dropdownOptions: Array<DropdownOption> = [];
	@Input() selected: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
