import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProdTagComponent } from './manage-prod-tag.component';

describe('ManageProdTagComponent', () => {
  let component: ManageProdTagComponent;
  let fixture: ComponentFixture<ManageProdTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProdTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProdTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
