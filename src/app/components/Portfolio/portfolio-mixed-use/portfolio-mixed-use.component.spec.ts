import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMixedUseComponent } from './portfolio-mixed-use.component';

describe('PortfolioMixedUseComponent', () => {
  let component: PortfolioMixedUseComponent;
  let fixture: ComponentFixture<PortfolioMixedUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMixedUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMixedUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
