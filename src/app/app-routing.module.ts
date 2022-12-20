import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'users', loadChildren: ()=> import('./users/users.module').then( m => m.UsersModule) },
  {path:'movie', loadChildren: ()=> import('./movies/movies.module').then(m => m.MoviesModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
