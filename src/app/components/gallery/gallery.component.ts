import { Component, Input, OnInit } from '@angular/core';

interface carouselImages {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  @Input() images: carouselImages[] = []
  @Input() indicators = true;

  selectedIndex = 0;

  ngOnInit(): void {
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

}
