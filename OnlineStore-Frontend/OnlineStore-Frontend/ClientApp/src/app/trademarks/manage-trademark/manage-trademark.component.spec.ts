import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTrademarkComponent } from './manage-trademark.component';

describe('ManageTrademarkComponent', () => {
  let component: ManageTrademarkComponent;
  let fixture: ComponentFixture<ManageTrademarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTrademarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTrademarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
