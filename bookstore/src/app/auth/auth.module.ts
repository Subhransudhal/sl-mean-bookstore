import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { BookModule } from '../book/book.module';
import { SignInComponent } from './log-in/sign-in.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookModule
  ],
  exports:[
    LoginComponent,
    SignInComponent
  ]
})
export class AuthModule { }
