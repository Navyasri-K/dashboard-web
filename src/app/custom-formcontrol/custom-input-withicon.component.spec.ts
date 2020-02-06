import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormcontrolComponent } from './custom-input-withicon.component';

describe('CustomFormcontrolComponent', () => {
  let component: CustomFormcontrolComponent;
  let fixture: ComponentFixture<CustomFormcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFormcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
