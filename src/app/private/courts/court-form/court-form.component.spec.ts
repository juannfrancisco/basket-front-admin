import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CourtFormComponent } from './court-form.component';

describe('CourtFormComponent', () => {
  let component: CourtFormComponent;
  let fixture: ComponentFixture<CourtFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
