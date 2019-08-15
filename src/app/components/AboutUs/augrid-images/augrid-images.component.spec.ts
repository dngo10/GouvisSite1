import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AUGridImagesComponent } from './augrid-images.component';

describe('AUGridImagesComponent', () => {
  let component: AUGridImagesComponent;
  let fixture: ComponentFixture<AUGridImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AUGridImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AUGridImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
