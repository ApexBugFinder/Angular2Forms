import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsBasicComponent } from './buttons-basic.component';

describe('ButtonsBasicComponent', () => {
  let component: ButtonsBasicComponent;
  let fixture: ComponentFixture<ButtonsBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
