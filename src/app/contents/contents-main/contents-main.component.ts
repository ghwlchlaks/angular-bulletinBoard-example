import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ContentsService } from '../contents.service';
import { slideInAnimation2 } from '../../animation';

@Component({
  selector: 'app-contents-main',
  templateUrl: './contents-main.component.html',
  styleUrls: ['./contents-main.component.css'],
  animations: [
    slideInAnimation2
  ]
})
export class ContentsMainComponent implements OnInit {

  add_back: String = '';
  constructor(private router: Router, public service: ContentsService) {
    if (this.router.url === '/add') {
      this.add_back = 'Back';
    } else if (this.router.url === '/board') {
      this.add_back = 'Add';
    } else {}
  }

  ngOnInit() {
  }

  add_back_toggle(): void {
    if (this.add_back === 'Add') {
      this.router.navigate(['/add']);
    } else {
      this.router.navigate(['/board']);
    }
  }

  getData(): any {
    this.service.getData().subscribe((data: {}) => {
      // console.log(data);
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
    outlet.activatedRouteData &&
    outlet.activatedRouteData['animation'];
  }
}
