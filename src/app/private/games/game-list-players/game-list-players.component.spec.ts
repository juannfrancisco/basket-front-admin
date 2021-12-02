import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListPlayersComponent } from './game-list-players.component';

describe('GameListPlayersComponent', () => {
  let component: GameListPlayersComponent;
  let fixture: ComponentFixture<GameListPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameListPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
