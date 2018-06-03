import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var Swiper:any;
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit,AfterViewInit {
  config: any;
  index=1;
  ngAfterViewInit(): void {
  }

  constructor() { }

  ngOnInit() {

  }

}
