import {AfterViewInit, Component, OnInit} from '@angular/core';

declare  let myImg:any;

@Component({
  selector: 'app-my-img',
  templateUrl: './my-img.component.html',
  styleUrls: ['./my-img.component.scss']
})
export class MyImgComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    myImg()
  }

  constructor() { }

  ngOnInit() {
  }


}
