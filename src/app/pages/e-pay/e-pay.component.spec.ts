import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EPayComponent } from './e-pay.component';

describe('EPayComponent', () => {
  let component: EPayComponent;
  let fixture: ComponentFixture<EPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
