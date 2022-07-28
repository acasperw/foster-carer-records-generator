import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fcrg-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('loaded header');
  }

}
