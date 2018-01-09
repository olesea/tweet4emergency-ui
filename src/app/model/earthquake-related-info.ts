import { GeoLocation } from './geo-location';


export interface EarthquakeRelatedInfo {
    content: string;
    owner: string;
    date: string;
    tweetGeoLocation: GeoLocation;
    countryGeoLocation: GeoLocation;
    certitude: string;
    geoAccuracy: string;
}
