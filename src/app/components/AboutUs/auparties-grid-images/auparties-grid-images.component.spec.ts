import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AUPartiesGridImagesComponent } from './auparties-grid-images.component';

describe('AUPartiesGridImagesComponent', () => {
  let component: AUPartiesGridImagesComponent;
  let fixture: ComponentFixture<AUPartiesGridImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AUPartiesGridImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AUPartiesGridImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
