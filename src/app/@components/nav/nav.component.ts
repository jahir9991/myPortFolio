import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  showNav: boolean;
  demoPage: any;
  trailer:any={
   title:'Home',
    show:false
  };

  constructor(  private router: Router) { }

  ngOnInit() {
  }

  clickNavButton() {
    this.showNav= !this.showNav;
  }

  changeRouter(path: string,title:string,showTrailer:boolean) {

    this.router.navigate([path]);
    this.trailer.title=title;
    this.trailer.show=showTrailer;
  }
}
