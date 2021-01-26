import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarksComponent } from './trademarks.component';

describe('TrademarksComponent', () => {
  let component: TrademarksComponent;
  let fixture: ComponentFixture<TrademarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
