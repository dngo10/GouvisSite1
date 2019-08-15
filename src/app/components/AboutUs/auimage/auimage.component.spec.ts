import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AUImageComponent } from './auimage.component';

describe('AUImageComponent', () => {
  let component: AUImageComponent;
  let fixture: ComponentFixture<AUImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AUImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AUImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
