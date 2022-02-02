import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/component/login/login.component';
import { SignInComponent } from './auth/log-in/sign-in.component';
import { HomeComponent } from './home/component/home/home.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

//step 1- define routs/path.

const routes=[
  {path:"",component: HomeComponent},
  {path:"signin", component: SignInComponent},
  {path:"login", component: LoginComponent},]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    SharedModule,
    //step 2- make the module know about the routs.
    RouterModule.forRoot(routes),
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
