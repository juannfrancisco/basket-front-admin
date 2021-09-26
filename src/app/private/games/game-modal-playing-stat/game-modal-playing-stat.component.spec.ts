import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModalPlayingStatComponent } from './game-modal-playing-stat.component';

describe('GameModalPlayingStatComponent', () => {
  let component: GameModalPlayingStatComponent;
  let fixture: ComponentFixture<GameModalPlayingStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameModalPlayingStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameModalPlayingStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
