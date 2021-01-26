import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProdTagComponent } from './show-prod-tag.component';

describe('ShowProdTagComponent', () => {
  let component: ShowProdTagComponent;
  let fixture: ComponentFixture<ShowProdTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProdTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProdTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
