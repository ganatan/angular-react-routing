import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta,
  ) { }

  ngOnInit(): void {
    this.meta.updateTag(
      {
        name: 'description',
        content: 'This application was developed with Angular version 14.1.1 and bootstrap 5.2.0' +
          ' It applies Routing, Lazy loading, Server side rendering and Progressive Web App (PWA)'
      });

  }

}
