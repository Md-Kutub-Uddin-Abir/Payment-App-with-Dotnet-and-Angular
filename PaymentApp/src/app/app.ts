import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentDetails } from './payment-details/payment-details';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaymentDetails,CommonModule,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PaymentApp');
  
}
