import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  logo: string = 'assets/images/logo/logo.png'

  constructor() { }

  ngOnInit(): void {
  }

}
