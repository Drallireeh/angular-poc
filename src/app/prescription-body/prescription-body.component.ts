import { Component, OnInit } from '@angular/core';
import { faUser, faKitMedical, faHouseMedicalCircleExclamation, faTextWidth, faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-prescription-body',
  templateUrl: './prescription-body.component.html',
  styleUrls: ['./prescription-body.component.less']
})
export class PrescriptionBodyComponent implements OnInit {

  constructor() { }

  faUser = faUser;
  faKitMedical = faKitMedical;
  faHouseMedicalCircleExclamation = faHouseMedicalCircleExclamation;
  faTextWidth = faTextWidth;
  faEdit = faEdit;

  ngOnInit(): void {
  }

}