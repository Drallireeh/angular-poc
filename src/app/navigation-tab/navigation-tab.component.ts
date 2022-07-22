import { Component, Input, OnInit } from '@angular/core';
import { StaticTabService } from '../static-tab.service';

@Component({
  selector: 'app-navigation-tab',
  templateUrl: './navigation-tab.component.html',
  styleUrls: ['./navigation-tab.component.less']
})
export class NavigationTabComponent implements OnInit {
  @Input() label!: string;
  @Input() id!: string;
  @Input() active!: boolean;

  constructor(public StaticTabService: StaticTabService) { }

  ngOnInit(): void {
  }

  selectTab(): void {

  }
}
