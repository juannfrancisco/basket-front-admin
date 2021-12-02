import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModalStatComponent } from './game-modal-stat.component';

describe('GameModalStatComponent', () => {
  let component: GameModalStatComponent;
  let fixture: ComponentFixture<GameModalStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameModalStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameModalStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
