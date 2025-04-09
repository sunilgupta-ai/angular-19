import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticate=false;
  serviceURL=  environment.serviceURL;
  constructor(private router:Router,private http:HttpClient) { }

  register(params:any): Observable<any> {
    let requestParam = btoa(JSON.stringify(params));
    let requestToken = CryptoJS.HmacSHA256(requestParam, environment.apiHashingKey).toString();
    let reqData = { 'REQUEST_DATA': requestParam, 'REQUEST_TOKEN': requestToken };
    let serviceUrl = `${environment.serviceURL}register`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let registerResponse = this.http.post(serviceUrl,reqData,{ headers });
    return registerResponse;
  }
}
