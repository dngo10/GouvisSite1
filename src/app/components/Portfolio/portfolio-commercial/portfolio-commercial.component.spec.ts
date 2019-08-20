import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCommercialComponent } from './portfolio-commercial.component';

describe('PortfolioCommercialComponent', () => {
  let component: PortfolioCommercialComponent;
  let fixture: ComponentFixture<PortfolioCommercialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCommercialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
