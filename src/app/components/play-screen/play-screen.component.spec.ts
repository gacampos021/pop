import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayScreenComponent } from './play-screen.component';

describe('PlayScreenComponent', () => {
  let component: PlayScreenComponent;
  let fixture: ComponentFixture<PlayScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
