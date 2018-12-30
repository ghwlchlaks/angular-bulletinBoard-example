import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ContentsService } from '../contents.service';
import { slideInAnimation1 } from '../../animation';

@Component({
  selector: 'app-contents-main',
  templateUrl: './contents-main.component.html',
  styleUrls: ['./contents-main.component.css'],
  animations: [
    slideInAnimation1
  ]
})
export class ContentsMainComponent implements OnInit {

  add_back: String = 'Add';
  constructor(private router: Router, public service: ContentsService) { }

  ngOnInit() {
  }

  add_back_toggle(): void {
    if (this.add_back === 'Add') {
      // this.getData();
      this.add_back = 'Back';
      this.router.navigate(['/add']);
    } else {
      this.add_back = 'Add';
      this.router.navigate(['/board']);
    }
  }

  getData(): any {
    this.service.getData().subscribe((data: {}) => {
      console.log(data);
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
    outlet.activatedRouteData &&
    outlet.activatedRouteData['animation'];
  }
}
