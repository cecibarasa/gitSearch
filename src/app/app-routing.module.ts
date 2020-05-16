import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitsearchComponent } from "./gitsearch/gitsearch.component";
import { RepositoriesComponent } from "./repositories/repositories.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";


const routes: Routes = [
  { path: 'landingpage', component: LandingPageComponent},
  { path: 'gitSearch', component: GitsearchComponent},
  { path: 'repositories', component: RepositoriesComponent},
  { path: '', redirectTo:"/landingpage", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
