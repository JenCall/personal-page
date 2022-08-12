import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-page';

  images = [
    {
      imageSrc:
      '../assets/carrousel-img-1.png',
      imageAlt: 'first-image'
    },
    {
      imageSrc:
      '../assets/carrousel-img-2.png',
      imageAlt: 'second-image'
    },
    {
      imageSrc:
      '../assets/carrousel-img-3.png',
      imageAlt: 'third-image'
    }
  ]
}
