import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModalPlayingCrewComponent } from './game-modal-playing-crew.component';

describe('GameModalPlayingCrewComponent', () => {
  let component: GameModalPlayingCrewComponent;
  let fixture: ComponentFixture<GameModalPlayingCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameModalPlayingCrewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameModalPlayingCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
