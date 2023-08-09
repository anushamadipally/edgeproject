import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  users: any;

  constructor(private http:HttpClient) { }
  private apiUrl = 'https://192.168.2.92/userapi/otp_generate.php';


  postOTP(data:any) {
    const headers= new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      "Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
    })

    return this.http.post<any>(this.apiUrl, data,{headers:headers});
  }
}
