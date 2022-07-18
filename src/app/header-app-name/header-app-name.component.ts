import { Component, OnInit } from '@angular/core';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-app-name',
  templateUrl: './header-app-name.component.html',
  styleUrls: ['./header-app-name.component.less']
})
export class HeaderAppNameComponent implements OnInit {
  faList = faList;
  
  constructor() { }

  ngOnInit(): void {
  }

}
