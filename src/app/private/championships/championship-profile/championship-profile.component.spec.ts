import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChampionshipProfileComponent } from './championship-profile.component';

describe('ChampionshipProfileComponent', () => {
  let component: ChampionshipProfileComponent;
  let fixture: ComponentFixture<ChampionshipProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionshipProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
