import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { BookModule } from '../book/book.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookModule
  ],
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
