import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModalFinalizeComponent } from './game-modal-finalize.component';

describe('GameModalFinalizeComponent', () => {
  let component: GameModalFinalizeComponent;
  let fixture: ComponentFixture<GameModalFinalizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameModalFinalizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameModalFinalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
