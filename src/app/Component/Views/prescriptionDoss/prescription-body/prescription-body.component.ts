import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { faUser, faKitMedical, faHouseMedicalCircleExclamation, faTextWidth, faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-prescription-body',
  templateUrl: './prescription-body.component.html',
  styleUrls: ['./prescription-body.component.less']
})
export class PrescriptionBodyComponent implements OnInit {
  @Input() openPopup = new EventEmitter<void>();
  constructor() { }

  boolbool: boolean = true;

  faUser = faUser;
  faKitMedical = faKitMedical;
  faHouseMedicalCircleExclamation = faHouseMedicalCircleExclamation;
  faTextWidth = faTextWidth;
  faEdit = faEdit;
  
  max = 30;
  min = 10;

	ngOnInit(): void {
	}

  changeTheme(primary: string, secondary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
  }

}