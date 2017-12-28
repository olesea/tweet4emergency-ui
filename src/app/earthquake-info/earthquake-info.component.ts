import { Component, OnInit, Input } from '@angular/core';
import { EarthquakeRelatedInfo } from '../model/earthquake-related-info';

@Component({
  selector: 'app-earthquake-info',
  templateUrl: './earthquake-info.component.html',
  styleUrls: ['./earthquake-info.component.css']
})
export class EarthquakeInfoComponent implements OnInit {

  @Input()
  info: EarthquakeRelatedInfo;


  constructor() { }

  ngOnInit() {
  }

}
