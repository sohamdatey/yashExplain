import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticTableComponent } from './automatic-table.component';

describe('AutomaticTableComponent', () => {
  let component: AutomaticTableComponent;
  let fixture: ComponentFixture<AutomaticTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
