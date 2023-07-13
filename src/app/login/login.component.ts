import { Component, OnInit } from '@angular/core';
import * as intlTelInput from 'intl-tel-input';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showOtpComponent = false;
  buttonName = 'Request OTP';
  buttonClicked = false;
  toggleOtpComponent() {
    this.showOtpComponent = !this.showOtpComponent;
    this.buttonName = this.showOtpComponent ? 'Verify OTP' : 'Request OTP';
    this.buttonClicked = this.showOtpComponent;
  }
 
  

 

  ngOnInit(): void {
 
   }
  }

  
  

  



