import { Component, HostListener, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})


export class AppComponent {
	title = 'angular-poc';

  constructor(private utilitiesService: UtilitiesService) {
    this.changeTheme('#b2e6f3', '#de7d0c'); // Set default theme
  }

  // HostListener qui permet de regarder les clics globaux (exemple hors éléments). On subscribe à cet event pour l'utiliser où on veut
  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
    console.log(event.target)
    this.utilitiesService.documentClickedTarget.next(event.target)
  }

  changeTheme(primary: string, secondary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
  }
}

// Injectable pour connecter l'évent de clic global
@Injectable({ providedIn: 'root' })
export class UtilitiesService {
   documentClickedTarget: Subject<HTMLElement> = new Subject<HTMLElement>()
}