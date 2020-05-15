import { Component, OnInit } from '@angular/core';
import { RepoService } from "../repo.service";
import { HttpClient } from "@angular/common/http";
import 'rxjs-compat';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  private repos: any = [];
  constructor(public reposService: RepoService, private http: HttpClient) { }

  ngOnInit() {
    this.reposService.gitRepos()
    .subscribe(data => {
      this.repos = data;
    })
    
  }
  findRepo() {
    this.reposService.updateRepo(this.repos);
    this.reposService.gitRepos
}
}
