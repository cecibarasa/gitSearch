import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs-compat'; //observable
import {environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  private repos: [];
  private apiUrl: string = 'https://api.github.com/';

  constructor(private http:HttpClient) { }

  gitRepos() {
    return this.http.get(environment.apiUrl + "/repos" + "?access_token=" + environment.Git_secret).map(result => result)

  }
  updateRepo(repos){
    this.repos = repos
  }
}
