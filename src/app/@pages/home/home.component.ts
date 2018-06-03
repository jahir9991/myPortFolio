import {Component, OnInit, ViewChild} from '@angular/core';
import {SwiperComponent, SwiperConfigInterface, SwiperDirective} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  index=0;
  title = 'app';
  public config: SwiperConfigInterface;
  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;



  ngOnInit(){
    this.config={
      direction: "vertical",
      // loop: true,
      // pagination: ".swiper-pagination",
      grabCursor: true,
      speed: 1000,
      // paginationClickable: true,
      // parallax: true,
      // autoplay: false,
      // effect: "slide",
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false
      }
    }
  }


  ngAfterViewInit(): void {
    try {
      // this.directiveRef.setIndex(3);
    }catch(err){
      console.log(err);
    }


  }

}
