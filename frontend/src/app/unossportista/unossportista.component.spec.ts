import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnossportistaComponent } from './unossportista.component';

describe('UnossportistaComponent', () => {
  let component: UnossportistaComponent;
  let fixture: ComponentFixture<UnossportistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnossportistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnossportistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
