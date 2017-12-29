import { Component, OnInit, Input } from '@angular/core';
import { EarthquakeRelatedInfo } from '../model/earthquake-related-info';

@Component({
  selector: 'app-earthquake-info',
  templateUrl: './earthquake-info.component.html',
  styleUrls: ['./earthquake-info.component.css']
})
export class EarthquakeInfoComponent implements OnInit {
  @Input()
  tweet: EarthquakeRelatedInfo;

  locationMessage: string;
  sentiment: string;


  constructor() { }

  ngOnInit() {
    this.locationMessage = this.findLocation();
    this.sentiment = this.getSentiment();
  }

  findLocation(): string {
    console.log(this.tweet.geoAccuracy);
    if (this.tweet.geoAccuracy === 'LOW') {
      return 'User location is not specified';
    } else if (this.tweet.geoAccuracy === 'HIGH') {
      return 'Latitude: ' + this.tweet.tweetGeoLocation.latitude +
             ' Longitude: ' + this.tweet.tweetGeoLocation.longitude;
    } else { // medium
      return 'Latitude: ' + this.tweet.countryGeoLocation.latitude +
             ' Longitude: ' + this.tweet.countryGeoLocation.longitude;
    }
  }

  getSentiment(): string {
    if (this.tweet.sentiment === 'NEGATIVE' || this.tweet.sentiment === 'VERY_NEGATIVE') {
        return 'column column-20 negative';
    } else if (this.tweet.sentiment === 'POSITIVE' || this.tweet.sentiment === 'VERY_POSITIVE') {
      return 'column column-20 positive';
    } else {
      return 'column column-20 neutral';
    }
  }

}
