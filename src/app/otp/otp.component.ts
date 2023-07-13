import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit , OnDestroy {
  otp1!: string;
  otp2!: string;
  otp3!: string;
  otp4!: string;
  otp5!: string;
  otp6!: string;


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

}
