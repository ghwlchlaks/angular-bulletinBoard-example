import { Component } from '@angular/core';
import { RouterOutlet, Router, Event, NavigationStart } from '@angular/router';
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

  button_color_arr: Array<Boolean> = [false, false, false];
  button_color_map: Map<String, number> = new Map([['/', 0], ['/board', 1], ['/board1', 2]]);
  private preUrl: String = undefined;
  private curUrl: String = undefined;

  constructor(private router: Router) {
    this.curUrl = this.router.url;
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.preUrl = this.curUrl;
        this.curUrl = event.url;
        this.button_color_arr[this.button_color_map.get(this.preUrl)] = false;
        this.button_color_arr[this.button_color_map.get(this.curUrl)] = true;
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
