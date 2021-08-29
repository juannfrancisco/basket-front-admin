import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipProfileComponent } from './championship-profile.component';

describe('ChampionshipProfileComponent', () => {
  let component: ChampionshipProfileComponent;
  let fixture: ComponentFixture<ChampionshipProfileComponent>;

  beforeEach(async(() => {
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
