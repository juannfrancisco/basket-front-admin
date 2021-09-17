import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CourtEditComponent } from './court-edit.component';

describe('CourtEditComponent', () => {
  let component: CourtEditComponent;
  let fixture: ComponentFixture<CourtEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
