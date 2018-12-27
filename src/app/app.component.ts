import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation2 } from './animation';

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

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
