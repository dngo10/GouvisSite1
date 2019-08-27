import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMultiFamilyComponent } from './portfolio-multi-family.component';

describe('PortfolioMultiFamilyComponent', () => {
  let component: PortfolioMultiFamilyComponent;
  let fixture: ComponentFixture<PortfolioMultiFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMultiFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMultiFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
