import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../apis.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
otpForm!:FormGroup
  constructor(private api: ApisService, private fb:FormBuilder, private http:HttpClient) {}
  showOtpComponent = false;
  buttonName = 'Request OTP';
  buttonClicked = false;


  ngOnInit(): void {
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required]]
    })
   }

  toggleOtpComponent() {
    this.showOtpComponent = !this.showOtpComponent;
    this.buttonName = this.showOtpComponent ? 'Verify OTP' : 'Request OTP';
    this.buttonClicked = this.showOtpComponent;
  let data= new FormData();
  data.append('mobile', this.otpForm.value.otp)
  
    this.api.postOTP(data).subscribe((res: any) => {
      console.log(res, 'otp');
   
    });
  }
  sendingOTP(){
    const data= new FormData();
  data.append('mobile', this.otpForm.value.otp)
  
    this.api.postOTP(data).subscribe((res: any) => {
      console.log(res, 'otp');
   
    });
  }
 
}
