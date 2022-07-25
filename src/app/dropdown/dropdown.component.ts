import { Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { DropdownContentComponent } from '../dropdown-content/dropdown-content.component';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent implements OnInit {
  @Input() selected: string = '0';
  dropdownActive: boolean = false;
  @ContentChildren(DropdownContentComponent) options!: QueryList<DropdownContentComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selected = this.options.first.label;
  }

  onClick(): void {
		this.dropdownActive = !this.dropdownActive;
	}
}
