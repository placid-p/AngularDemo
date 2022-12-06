import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'signup',component:SignUpComponent},
  {path:'signin',component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
