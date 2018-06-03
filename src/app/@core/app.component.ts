import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {SwiperComponent, SwiperConfigInterface, SwiperDirective} from 'ngx-swiper-wrapper';

declare var onePageScroll:any;
declare var inView:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 showMainLoding:boolean=false;
 showNav:boolean=false;


}
