import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageParallaxBgComponent } from './page-parallax-bg.component';

describe('PageParallaxBgComponent', () => {
  let component: PageParallaxBgComponent;
  let fixture: ComponentFixture<PageParallaxBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageParallaxBgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageParallaxBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
