import { Component, OnInit } from '@angular/core';
import { bookmodel } from 'src/app/book/models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

 books!: bookmodel[];

  ngOnInit(): void {
    this.books=[];
    let book= new bookmodel();
    book.id=1;
    book.name="Siddhartha";
    book.author="Herman H";
    book.imgsrc="https://images-na.ssl-images-amazon.com/images/I/71o4Wi1CRsL.jpg";
    book.price=200;
    this.books.push(book);

  }

}
