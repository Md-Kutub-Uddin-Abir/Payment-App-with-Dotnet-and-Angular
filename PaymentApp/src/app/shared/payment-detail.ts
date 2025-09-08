import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PaymentDetailModel } from './payment-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetail {

  url : string = environment.apiBaseUrl + '/api/PaymentDetail'
  list: PaymentDetailModel[]=[];
  formData : PaymentDetailModel = new PaymentDetailModel()
  formSubmitted : boolean = false;
  constructor(private http: HttpClient){ }

  refreshList(){
    this.http.get(this.url).subscribe({
      next: res=>{
        this.list = res as PaymentDetailModel[];
      },
      error : err => {console.log(err)}
    })
  }

  postPaymentDetail()
  {
     return this.http.post(this.url,this.formData)
  }
  putPaymentDetail()
  {
     return this.http.put(this.url + '/' + this.formData.paymentdetailId,this.formData)
  }
  deletePaymentDetail(id:number)
  {
     return this.http.delete(this.url + '/' + id)
  }
  resetForm(form:NgForm){
    form.form.reset()
    this.formData = new PaymentDetailModel()
    this.formSubmitted = false;
  }

}
