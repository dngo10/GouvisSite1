import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewauculturegridimageComponent } from './newauculturegridimage.component';

describe('NewauculturegridimageComponent', () => {
  let component: NewauculturegridimageComponent;
  let fixture: ComponentFixture<NewauculturegridimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewauculturegridimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewauculturegridimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
