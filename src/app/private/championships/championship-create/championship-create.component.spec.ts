import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChampionshipCreateComponent } from './championship-create.component';

describe('ChampionshipCreateComponent', () => {
  let component: ChampionshipCreateComponent;
  let fixture: ComponentFixture<ChampionshipCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionshipCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
