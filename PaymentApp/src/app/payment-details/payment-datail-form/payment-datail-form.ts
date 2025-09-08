import { Component } from '@angular/core';
import { PaymentDetail } from '../../shared/payment-detail';
import { FormsModule, NgForm } from '@angular/forms';
import { PaymentDetailModel } from '../../shared/payment-detail.model';

@Component({
  selector: 'app-payment-datail-form',
  imports: [FormsModule],
  templateUrl: './payment-datail-form.html',
  styleUrl: './payment-datail-form.css'
})
export class PaymentDatailForm {
  constructor(public service: PaymentDetail,){
    } 
  
    onSubmit(form:NgForm){
      this.service.formSubmitted=true;
      if(form.valid){
        if(this.service.formData.paymentdetailId==0)
          this.insertRecord(form)
        else
          this.updateRecord(form)
      }
      
    }
    insertRecord(form:NgForm){
      this.service.postPaymentDetail().subscribe({
        next:res=>{
          this.service.list = res as PaymentDetailModel[]
          this.service.resetForm(form)
        },
        error:err=> {console.log(err)}
      })
    }
    updateRecord(form:NgForm)
    {
      this.service.putPaymentDetail().subscribe({
        next:res=>{
          this.service.list = res as PaymentDetailModel[]
          this.service.resetForm(form)
        },
        error:err=> {console.log(err)}
      })
    }
}
