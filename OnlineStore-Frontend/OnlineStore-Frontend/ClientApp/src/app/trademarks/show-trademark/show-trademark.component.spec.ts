import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTrademarkComponent } from './show-trademark.component';

describe('ShowTrademarkComponent', () => {
  let component: ShowTrademarkComponent;
  let fixture: ComponentFixture<ShowTrademarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTrademarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTrademarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
