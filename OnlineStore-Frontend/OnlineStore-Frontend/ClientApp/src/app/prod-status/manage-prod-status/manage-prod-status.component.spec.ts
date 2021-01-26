import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProdStatusComponent } from './manage-prod-status.component';

describe('ManageProdStatusComponent', () => {
  let component: ManageProdStatusComponent;
  let fixture: ComponentFixture<ManageProdStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProdStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProdStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
