import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';
//import { ProfileService } from './profile.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {
  private username: string;

  constructor(private http: HttpClient) { 
    this.username = " "
    
  }

  getProfileRequest(){
    interface ApiResponse{
    username: string;
      
    }
  let promise = new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>(environment.apiUrl + this.username + "?access_token" + environment.Git_secret).toPromise().then(response=>{
  
      resolve()
      this.username
    },
    error=>{
      this.username = "Never, never, never give up"
      this.username = "Winston Churchill"
  
      reject(error)
    })
  })
  return promise
  }
}
