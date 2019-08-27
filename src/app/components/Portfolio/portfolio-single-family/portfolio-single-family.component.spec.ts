import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSingleFamilyComponent } from './portfolio-single-family.component';

describe('PortfolioSingleFamilyComponent', () => {
  let component: PortfolioSingleFamilyComponent;
  let fixture: ComponentFixture<PortfolioSingleFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSingleFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSingleFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
