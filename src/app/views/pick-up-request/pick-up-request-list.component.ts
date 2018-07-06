import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pick-up-request-list',
  templateUrl: './pick-up-request-list.component.html',
  styleUrls: ['./pick-up-request-list.component.scss']
})
export class PickUpRequestListComponent implements OnInit {

  constructor() { }
  public loading: boolean;
  ngOnInit() {
  }

}
