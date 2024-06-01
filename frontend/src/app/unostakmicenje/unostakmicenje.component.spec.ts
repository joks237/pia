import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnostakmicenjeComponent } from './unostakmicenje.component';

describe('UnostakmicenjeComponent', () => {
  let component: UnostakmicenjeComponent;
  let fixture: ComponentFixture<UnostakmicenjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnostakmicenjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnostakmicenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
