import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'a-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() placeholder: string = 'Search';

  constructor() { }

  ngOnInit(): void {
  }

}
