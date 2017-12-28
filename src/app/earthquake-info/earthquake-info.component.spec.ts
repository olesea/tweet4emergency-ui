import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakeInfoComponent } from './earthquake-info.component';

describe('EarthquakeInfoComponent', () => {
  let component: EarthquakeInfoComponent;
  let fixture: ComponentFixture<EarthquakeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
