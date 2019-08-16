import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AUCultureGridImagesComponent } from './auculture-grid-images.component';

describe('AUCultureGridImagesComponent', () => {
  let component: AUCultureGridImagesComponent;
  let fixture: ComponentFixture<AUCultureGridImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AUCultureGridImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AUCultureGridImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
