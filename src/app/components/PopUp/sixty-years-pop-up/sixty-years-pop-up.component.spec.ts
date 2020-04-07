import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixtyYearsPopUpComponent } from './sixty-years-pop-up.component';

describe('SixtyYearsPopUpComponent', () => {
  let component: SixtyYearsPopUpComponent;
  let fixture: ComponentFixture<SixtyYearsPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixtyYearsPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixtyYearsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
