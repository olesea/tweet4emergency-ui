import { Component, OnInit, Input } from '@angular/core';
import { EarthquakeRelatedInfo } from '../model/earthquake-related-info';

@Component({
  selector: 'app-live-feed',
  templateUrl: './live-feed.component.html',
  styleUrls: ['./live-feed.component.css']
})
export class LiveFeedComponent implements OnInit {

  @Input()
  info: EarthquakeRelatedInfo[];

  constructor() { }

  ngOnInit() {
  }

}
