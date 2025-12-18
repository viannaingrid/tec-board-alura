import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [],
  templateUrl: './images.component.html',
  styleUrl: './images.component.scss'
})
export class ImagesComponent {
 @Input() src: string = '';
 @Input() alt: string = '';
}
