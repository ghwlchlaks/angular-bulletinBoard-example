import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'angular-bulletinBoard-example';

  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
    outlet.activatedRouteData &&
    outlet.activatedRouteData['animation'];
  }
}
