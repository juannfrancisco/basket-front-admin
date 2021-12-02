import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModalStatPlayerComponent } from './game-modal-stat-player.component';

describe('GameModalStatPlayerComponent', () => {
  let component: GameModalStatPlayerComponent;
  let fixture: ComponentFixture<GameModalStatPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameModalStatPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameModalStatPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
