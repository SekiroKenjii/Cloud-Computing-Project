import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppdashboardComponent } from './appdashboard.component';

describe('AppdashboardComponent', () => {
  let component: AppdashboardComponent;
  let fixture: ComponentFixture<AppdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
