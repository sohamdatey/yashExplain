import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualDistributionComponent } from './manual-distribution.component';

describe('ManualDistributionComponent', () => {
  let component: ManualDistributionComponent;
  let fixture: ComponentFixture<ManualDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
