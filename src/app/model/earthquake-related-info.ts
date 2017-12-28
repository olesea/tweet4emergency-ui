import { GeoLocation } from './geo-location';


export interface EarthquakeRelatedInfo {
    content: string;
    owner: string;
    date: Date;
    tweetGeoLocation: GeoLocation;
    countryGeoLocation: GeoLocation;
    geoLocationAccuracy: string;
    sentiment: string;
}
