import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParallaxComponent } from './organisms/parallax/parallax.component';
import { PageParallaxBgComponent } from './templates/page-parallax-bg/page-parallax-bg.component';

@NgModule({
  declarations: [
    ParallaxComponent,
    PageParallaxBgComponent,
  ],
  imports: [CommonModule],
  exports: [ParallaxComponent, PageParallaxBgComponent],
  providers: [],
})
export class ComponentsModule { }
