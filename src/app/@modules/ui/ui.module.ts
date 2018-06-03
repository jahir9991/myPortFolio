import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TooltipModule} from 'ngx-bootstrap';
import {LoaderComponent} from '../../@components/loader/loader.component';
import {MyImgComponent} from '../../@components/my-img/my-img.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {NavComponent} from '../../@components/nav/nav.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  imports: [
    CommonModule,
    SwiperModule,

    TooltipModule.forRoot()
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  declarations: [LoaderComponent,MyImgComponent,NavComponent],
  exports:[
    TooltipModule,
    SwiperModule,
    LoaderComponent,
    MyImgComponent,
    NavComponent

  ]
})
export class UiModule { }
