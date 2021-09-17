import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChampionshipEditComponent } from './championship-edit.component';

describe('ChampionshipEditComponent', () => {
  let component: ChampionshipEditComponent;
  let fixture: ComponentFixture<ChampionshipEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionshipEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
