import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectDetailComponent } from './portfolio-project-detail.component';

describe('PortfolioProjectDetailComponent', () => {
  let component: PortfolioProjectDetailComponent;
  let fixture: ComponentFixture<PortfolioProjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioProjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
