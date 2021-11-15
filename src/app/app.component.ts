import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  paymentDate: string = '';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onNameChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.name = value;
  }

  onDateChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.paymentDate = value;
  }

  onAmountChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.amount = parseFloat(value);
  }

  onHeightChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.height = parseFloat(value);
  } 
  
    onMilesChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.miles = parseFloat(value);
  }
}
