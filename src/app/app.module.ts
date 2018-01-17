import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WebsocketService } from './streaming/websocket.service';
import { StreamingService } from './streaming/streaming.service';

import { AgmCoreModule } from '@agm/core';
import { TooltipModule } from 'ngx-tooltip';
import { HeaderComponent } from './header/header.component';
import { LiveFeedComponent } from './live-feed/live-feed.component';
import { EarthquakeInfoComponent } from './earthquake-info/earthquake-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LiveFeedComponent,
    EarthquakeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule,
    // please get your own API key here:
    // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD8ZV6fcnGu8HApCNKZdzXeoKOY85be2tw'
    })
  ],
  providers: [
    WebsocketService,
    StreamingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
