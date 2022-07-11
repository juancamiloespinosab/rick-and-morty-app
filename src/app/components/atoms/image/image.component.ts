import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'a-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() src: string;
  @Input() class: string;
  @Output() onLoadImage = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onLoad() {
    this.onLoadImage.emit(true);
  }

}
