import { Component, ElementRef, ViewChild } from '@angular/core';

declare let require: any;

@Component({
  selector: 'o-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent {
  @ViewChild('scene') scene: ElementRef<HTMLDivElement>;

  monsterUrl = 'assets/images/parallax/monster.png'
  rickUrl = 'assets/images/parallax/rick.png'
  mortyUrl = 'assets/images/parallax/morty.png'
  
  ngAfterViewInit() {    
    const Parallax = require('parallax-js');
    const parallaxInstance = new Parallax(this.scene.nativeElement);
  }
}
