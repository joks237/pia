import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosrezultatComponent } from './unosrezultat.component';

describe('UnosrezultatComponent', () => {
  let component: UnosrezultatComponent;
  let fixture: ComponentFixture<UnosrezultatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnosrezultatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnosrezultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
