import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StreamingService } from './streaming/streaming.service';
import { EarthquakeRelatedInfo } from './model/earthquake-related-info';
import { mockedData } from './mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mapCentreLatitude = 45.9432;
  mapCentreLongitude = 24.9668;
  mouseOnMarker: boolean;

  earthquakeTweets: EarthquakeRelatedInfo[] = [];

  connectButtonLabel = 'Stream';


  constructor(private streamingService: StreamingService<EarthquakeRelatedInfo>) {

  }

  connect(): void {
      this.streamingService.connect('ws://localhost:8080/stream');
      console.log('Connected!');
      this.streamingService.stream()
                           .subscribe(info => this.mapData(info));
  }

  mapData(info: EarthquakeRelatedInfo): void {
    this.earthquakeTweets.unshift(info);
  }

  openInfo(): void {
    this.mouseOnMarker = true;
  }

  closeInfo(): void {
    this.mouseOnMarker = false;
  }

}
