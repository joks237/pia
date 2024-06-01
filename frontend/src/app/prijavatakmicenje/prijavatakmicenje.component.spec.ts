import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavatakmicenjeComponent } from './prijavatakmicenje.component';

describe('PrijavatakmicenjeComponent', () => {
  let component: PrijavatakmicenjeComponent;
  let fixture: ComponentFixture<PrijavatakmicenjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijavatakmicenjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijavatakmicenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
