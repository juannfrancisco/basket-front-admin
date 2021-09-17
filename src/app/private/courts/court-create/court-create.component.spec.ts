import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CourtCreateComponent } from './court-create.component';

describe('CourtCreateComponent', () => {
  let component: CourtCreateComponent;
  let fixture: ComponentFixture<CourtCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
