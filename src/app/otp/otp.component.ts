import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit , OnDestroy {
  otp1!: Number;
  otp2!: Number;
  otp3!: Number;
  otp4!: Number;
  otp5!: Number;
  otp6!: Number;


  remainingTime ! : string;
  timerId: any;

  ngOnInit() {
    this.startTimer();
  }
 
  startTimer() {
    this.remainingTime = '60'; // Set the initial time (in seconds)
    this.timerId = setInterval(() => {
      const time = parseInt(this.remainingTime, 10);
      if (time > 0) {
        this.remainingTime = (time - 1).toString();
      } else {
        clearInterval(this.timerId);
      }
    }, 1000);
  }
    
  ngOnDestroy() {
    clearInterval(this.timerId);
  }
  validateInput(event: any) {
    const input = event.target;
    const numericValue = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  
    if (numericValue !== input.value) {
      input.value = numericValue; // Update the input value with only numbers
    }
  }
  
}
