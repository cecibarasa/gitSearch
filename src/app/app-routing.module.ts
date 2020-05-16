import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitsearchComponent } from "./gitsearch/gitsearch.component";
import { RepositoriesComponent } from "./repositories/repositories.component";
import { NotFoundComponent } from "./not-found/not-found.component";


const routes: Routes = [
  { path: 'gitSearch', component: GitsearchComponent},
  { path: 'repositories', component: RepositoriesComponent},
  { path: '', redirectTo:"/gitSeach", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
