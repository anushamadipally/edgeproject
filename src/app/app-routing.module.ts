import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { CoursesComponent } from './courses/courses.component';
import { SignupComponent } from './signup/signup.component';
import { GamesComponent } from './games/games.component';


const routes: Routes = [
  { path: '',redirectTo:'navbar',pathMatch:'full'},
  { path:  'navbar',component: NavbarComponent},
  { path: 'login', component: LoginComponent },
   { path: 'signup', component: SignupComponent },
  
  { path: 'sidenav', component: SidenavComponent, children:[
    {path: '', redirectTo:'home', pathMatch:'full'},
    { path:'home', component:HomeComponent },
    { path:'courses', component:CoursesComponent },
    { path:'games', component:GamesComponent },
  ] }, 
   
  
  { path: 'sidebar', component: SidebarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
