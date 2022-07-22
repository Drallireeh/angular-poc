import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticTabService {
  actualTab!: string;

  changeTab(event: Event): void {
    this.actualTab = (event.target as Element).id;
    console.log(this.actualTab)
  }

}
