import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipSharedServiceComponent } from './vip-shared-service.component';


describe('VipSharedServiceComponent', () => {
  let component: VipSharedServiceComponent;
  let fixture: ComponentFixture<VipSharedServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipSharedServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipSharedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
