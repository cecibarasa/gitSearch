import { Component, OnInit } from '@angular/core';
import { RepoService } from "../repo.service";
import { HttpClient } from "@angular/common/http";
import 'rxjs-compat';
import { Repo } from "../repo";
import { ProfileService } from "../profile.service";
// import { ProfileRequestService } from "../profile-request.service";

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  public repos: any = [];
  public repo: Repo;
  user: any = [];
  public username: string;
  constructor(public reposService: RepoService, private http: HttpClient, public profileService: ProfileService) { 
    this.username = "moringaschool"
  }

  ngOnInit() {
    this.profileService.getProfileInfo().subscribe(res => {
      this.user = res;
    })
    this.profileService.gitRepos()
    .subscribe(data => {
      this.repos = data;
    })
    
}
    
    
  
findProfile() {
  this.profileService.updateProfile(this.username);

  this.profileService.getProfileInfo()
    .subscribe(res => {
      //console.log(res)
      this.user = res;
    })

  this.profileService.gitRepos()
    .subscribe(data => {
      //console.log(data)
      this.repos = data;
    })
}
}
