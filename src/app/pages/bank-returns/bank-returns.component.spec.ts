import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankReturnsComponent } from './bank-returns.component';

describe('BankReturnsComponent', () => {
  let component: BankReturnsComponent;
  let fixture: ComponentFixture<BankReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
