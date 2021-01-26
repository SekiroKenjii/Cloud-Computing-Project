import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProdStatusComponent } from './show-prod-status.component';

describe('ShowProdStatusComponent', () => {
  let component: ShowProdStatusComponent;
  let fixture: ComponentFixture<ShowProdStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProdStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProdStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
