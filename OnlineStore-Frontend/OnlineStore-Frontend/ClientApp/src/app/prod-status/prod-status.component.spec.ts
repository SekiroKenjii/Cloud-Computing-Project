import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdStatusComponent } from './prod-status.component';

describe('ProdStatusComponent', () => {
  let component: ProdStatusComponent;
  let fixture: ComponentFixture<ProdStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
