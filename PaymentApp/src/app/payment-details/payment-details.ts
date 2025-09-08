import { Component, OnInit } from '@angular/core';
import { PaymentDatailForm } from './payment-datail-form/payment-datail-form'; 
import { PaymentDetail } from '../shared/payment-detail';
import { CommonModule } from '@angular/common';
import { PaymentDetailModel } from '../shared/payment-detail.model';

@Component({
  selector: 'app-payment-details',
  imports: [PaymentDatailForm,CommonModule],
  templateUrl: './payment-details.html',
  styleUrl: './payment-details.css',
})
export class PaymentDetails implements OnInit {
    constructor(public service: PaymentDetail){

    }
  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord: PaymentDetailModel)
  {
    this.service.formData= Object.assign({}, selectedRecord);
  }
  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
    this.service.deletePaymentDetail(id).subscribe({
        next:res=>{
          this.service.list = res as PaymentDetailModel[]
        },
        error:err=> {console.log(err)}
      })

  }
}
