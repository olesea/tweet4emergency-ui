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
  certitudeCSS: string;


  constructor() { }

  ngOnInit() {
    this.locationMessage = this.findLocation();
    this.certitudeCSS = this.getCertitudeCSSClass();
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

  getCertitudeCSSClass(): string {
    if (this.tweet.certitude === 'POSITIVE') {
        return 'column column-20 positive';
    } else if (this.tweet.certitude === 'NEGATIVE') {
      return 'column column-20 negative';
    } else {
      return 'column column-20 neutral';
    }
  }

}
