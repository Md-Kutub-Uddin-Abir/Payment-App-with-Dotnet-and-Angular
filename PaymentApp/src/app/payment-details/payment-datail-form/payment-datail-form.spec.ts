import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDatailForm } from './payment-datail-form';

describe('PaymentDatailForm', () => {
  let component: PaymentDatailForm;
  let fixture: ComponentFixture<PaymentDatailForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentDatailForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentDatailForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
