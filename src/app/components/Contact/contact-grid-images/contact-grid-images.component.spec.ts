import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGridImagesComponent } from './contact-grid-images.component';

describe('ContactGridImagesComponent', () => {
  let component: ContactGridImagesComponent;
  let fixture: ComponentFixture<ContactGridImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactGridImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactGridImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
