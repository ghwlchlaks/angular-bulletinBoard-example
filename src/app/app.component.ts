import { Component } from '@angular/core';
import { RouterOutlet, Router, Event } from '@angular/router';
import { slideInAnimation2 } from './animation';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation2
  ]
})
export class AppComponent {
  title = 'angular-bulletinBoard-example';
  buttonColor: Boolean = false;

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((val: Event) => {
      if (this.location.path() === '' ||
       this.location.path() === '/board' ||
       this.location.path() === '/board1' ) {
         console.log('eref');
        this.buttonColor = true;
      }
    });
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  side_click(index: number): void {
    switch (index) {
      case 0:
        this.router.navigate(['/']);
        break;
      case 1:
        this.router.navigate(['/board']);
        break;
      case 2:
        this.router.navigate(['/board1']);
        break;
      default:
        break;
    }
  }
}
