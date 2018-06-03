import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { UiModule } from '../@modules/ui/ui.module';
import { environment } from '../../environments/environment';
import { AboutComponent } from '../@pages/about/about.component';
import { WorkComponent } from '../@pages/work/work.component';
import { HomeComponent } from '../@pages/home/home.component';
import { AppRoutingModule } from './approuting.module';

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent, WorkComponent],
  imports: [
    // environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    //  ServiceWorkerModule.register('/ngsw-worker.js') ,
    BrowserModule,
    AppRoutingModule,
    UiModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
