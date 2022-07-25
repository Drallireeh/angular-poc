import { Component, OnInit, Input } from '@angular/core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-icon',
  templateUrl: './header-icon.component.html',
  styleUrls: ['./header-icon.component.less']
})
export class HeaderIconComponent implements OnInit {
  @Input() idString!: string | undefined;
  @Input() url: string | undefined;
  @Input() title!: string;
  @Input() icone!: string | undefined;
  @Input() confirm!: boolean;
  @Input() display!: boolean;
  @Input() othersClass!: string; 

  faQuestion = faQuestion;

  constructor() { }

  ngOnInit(): void {
  }

}
