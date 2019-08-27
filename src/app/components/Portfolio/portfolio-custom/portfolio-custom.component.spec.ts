import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCustomComponent } from './portfolio-custom.component';

describe('PortfolioCustomComponent', () => {
  let component: PortfolioCustomComponent;
  let fixture: ComponentFixture<PortfolioCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
