import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents-tabs',
  templateUrl: './contents-tabs.component.html',
  styleUrls: ['./contents-tabs.component.css']
})
export class ContentsTabsComponent implements OnInit {

  items: string[] = ['All', 'Java', 'JavaScript', 'Ruby', 'C', 'C++', 'C#', 'ETC'];

  constructor() { }

  ngOnInit() {
  }

}
