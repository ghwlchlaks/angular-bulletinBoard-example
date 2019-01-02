import { Component } from '@angular/core';
import { RouterOutlet, Router, Event, NavigationEnd } from '@angular/router';
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
  buttonColor: String = 'green';

  constructor(private router: Router, private location: Location) {
    // this.router.events.subscribe((val: Event) => {
    //   // if (this.location.path() === '') {
    //   //   // console.log(this.location.path());
    //   //   // this.buttonColor = 'blue';
    //   // }
    // });
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
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
