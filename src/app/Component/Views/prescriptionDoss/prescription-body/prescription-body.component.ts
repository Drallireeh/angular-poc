import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { faUser, faKitMedical, faHouseMedicalCircleExclamation, faTextWidth, faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-prescription-body',
  templateUrl: './prescription-body.component.html',
  styleUrls: ['./prescription-body.component.less']
})
export class PrescriptionBodyComponent implements OnInit {
  @Input() openPopup = new EventEmitter<void>();
  changingValue: Subject<boolean> = new Subject();
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
    //this.boolbool = true;
    //this.openPopup.emit();
      this.changingValue.next(true);
  }
  
  changeTheme(primary: string, secondary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
  }

}