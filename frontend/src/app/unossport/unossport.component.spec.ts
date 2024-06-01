import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnossportComponent } from './unossport.component';

describe('UnossportComponent', () => {
  let component: UnossportComponent;
  let fixture: ComponentFixture<UnossportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnossportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnossportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
