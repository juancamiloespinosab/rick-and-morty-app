import { Component, ElementRef, ViewChild } from '@angular/core';
import { UtilsService } from '@app/services/helpers/utils/utils.service';

declare let require: any;

@Component({
  selector: 'o-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent {
  @ViewChild('scene') scene: ElementRef<HTMLDivElement>;
  voidScene: boolean = false;

  monsterUrl = 'assets/images/parallax/monster.png'
  rickUrl = 'assets/images/parallax/rick.png'
  mortyUrl = 'assets/images/parallax/morty.png'

  constructor(private utilsService: UtilsService) {}

  ngOnInit() {
    const lastPath = this.utilsService.getLastPath()
    this.voidScene = lastPath != 'welcome';  
  }
  
  ngAfterViewInit() {    
    const Parallax = require('parallax-js');
    const parallaxInstance = new Parallax(this.scene.nativeElement);
  }
}
