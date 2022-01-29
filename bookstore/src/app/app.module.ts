import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/component/login/login.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { BookModule } from './book/book.module';
import { HomeComponent } from './home/component/home/home.component';
import { HomeModule } from './home/home.module';



//step 1- define routs/path.

const routes=[
  {path:"",component:HomeComponent},
  {path:"signin", component: SignInComponent},
  {path:"login", component: LoginComponent},]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    //step 2- make the module know about the routs.
    RouterModule.forRoot(routes),
    HomeModule,
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
