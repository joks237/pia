import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosrasporedComponent } from './unosraspored.component';

describe('UnosrasporedComponent', () => {
  let component: UnosrasporedComponent;
  let fixture: ComponentFixture<UnosrasporedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnosrasporedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnosrasporedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
