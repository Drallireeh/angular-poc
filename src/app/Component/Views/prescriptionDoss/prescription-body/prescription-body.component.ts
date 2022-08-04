import { Component, OnInit } from '@angular/core';
import { faUser, faKitMedical, faHouseMedicalCircleExclamation, faTextWidth, faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-prescription-body',
  templateUrl: './prescription-body.component.html',
  styleUrls: ['./prescription-body.component.less']
})
export class PrescriptionBodyComponent implements OnInit {

  constructor() { }

  boolbool: boolean = true;

  faUser = faUser;
  faKitMedical = faKitMedical;
  faHouseMedicalCircleExclamation = faHouseMedicalCircleExclamation;
  faTextWidth = faTextWidth;
  faEdit = faEdit;

	ngOnInit(): void {
	}

	openPopin(): void {
    this.boolbool = true;
  }
  
  changeTheme(primary: string, secondary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
  }

}