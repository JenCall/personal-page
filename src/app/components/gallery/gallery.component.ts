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

  selectedIndex = 0;

}
