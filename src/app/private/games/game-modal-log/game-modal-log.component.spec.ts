import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModalLogComponent } from './game-modal-log.component';

describe('GameModalLogComponent', () => {
  let component: GameModalLogComponent;
  let fixture: ComponentFixture<GameModalLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameModalLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameModalLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
