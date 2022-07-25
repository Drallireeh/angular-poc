import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllergiesPathologiesComponent } from './Component/Views/allergies-pathologies/allergies-pathologies.component';
import { PrescriptionComponent } from './Component/Views/prescriptionDoss/prescription/prescription.component';

const routes: Routes = [
  { path: 'allergies', component: AllergiesPathologiesComponent },
  { path: 'prescription', component: PrescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
