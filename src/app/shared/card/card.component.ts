import { Component, Input } from '@angular/core';
import { ImagesComponent } from '../images/images.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ImagesComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() textTitle: string = '';
  @Input() textParagraph: string = '';
  @Input() iconName: string = '';
}
