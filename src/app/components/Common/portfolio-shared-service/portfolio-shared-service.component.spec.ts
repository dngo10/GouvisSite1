import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSharedServiceComponent } from './portfolio-shared-service.component';

describe('PortfolioSharedServiceComponent', () => {
  let component: PortfolioSharedServiceComponent;
  let fixture: ComponentFixture<PortfolioSharedServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSharedServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSharedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
