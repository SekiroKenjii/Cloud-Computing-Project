import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdTagComponent } from './prod-tag.component';

describe('ProdTagComponent', () => {
  let component: ProdTagComponent;
  let fixture: ComponentFixture<ProdTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
