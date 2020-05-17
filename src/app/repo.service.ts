import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs-compat'; //observable
import {environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  public repos: [];
  private username: string;

  //private apiUrl: string = 'https://api.github.com/repositories/';

  constructor(private http:HttpClient) { 
    this.username = "cecibarasa";
  }
  getProfileInfo(){
    return this.http.get(environment.apiUrl + this.username + "?access_token=" + environment.Git_secret).map(result => result)
  }
  gitRepos() {
    return this.http.get(environment.apiUrl + this.username + "/repos" + "?access_token=" + environment.Git_secret).map(result => result)
  }
// gitRepos(){
//   return this.http.get(environment.apiUrl +this.username + "/repos?order=created&sort=asc?access_token=" +environment.Git_secret).map(result => result)
// }
  //https://api.github.com/users/'+ this.username+ "/repos?order=created&sort=asc?access_token="+environment.Git_secret
  
  updateRepo(repos: any){
    this.repos = repos;

  
}
getRepo(){
  interface ApiResponse{
    
  }
// let promise = new Promise((resolve,reject)=>{
//   this.http.get<ApiResponse>(environment.apiUrl + this.username + "/repos" + "?access_token" + environment.Git_secret).toPromise().then(response=>{

//     resolve()
//   },
//   error=>{
//     this.username = "Never, never, never give up"
//     this.username = "Winston Churchill"

//     reject(error)
//   })
// })
// return promise
// }
}
updateProfile(username:string){
  this.username = username
}
}
