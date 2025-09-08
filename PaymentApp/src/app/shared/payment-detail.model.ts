import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailModel {
  
    paymentdetailId:number=0
    cardOwnerName: string=""
    cardNumber: string=""
    securityCode: string=""
    expirationDate: string=""
  
}
