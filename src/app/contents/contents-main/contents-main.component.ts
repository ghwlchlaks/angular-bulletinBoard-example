import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contents-main',
  templateUrl: './contents-main.component.html',
  styleUrls: ['./contents-main.component.css']
})
export class ContentsMainComponent implements OnInit {

  add_back = 'Add';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  add_back_toggle(): void {
    if (this.add_back === 'Add') {
      this.add_back = 'Back';
    } else {
      this.router.navigate(['/board']);
      this.add_back = 'Add';
    }
  }
}
