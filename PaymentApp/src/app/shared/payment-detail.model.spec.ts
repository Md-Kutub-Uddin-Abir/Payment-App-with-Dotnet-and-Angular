import { TestBed } from '@angular/core/testing';

import { PaymentDetailModel } from './payment-detail.model';

describe('PaymentDetailModel', () => {
  let service: PaymentDetailModel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentDetailModel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
