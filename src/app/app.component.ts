import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StreamingService } from './streaming/streaming.service';
import { EarthquakeRelatedInfo } from './model/earthquake-related-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lat = 51.678418;
  lng = 7.809007;

  constructor(private streamingService: StreamingService<EarthquakeRelatedInfo>) {

  }

  connect(): void {
      this.streamingService.connect('ws://localhost:8080/stream');
      console.log('Connected!');
      this.streamingService.stream()
                         .subscribe(info => console.log(info.date));
  }
}
