import { Component } from '@angular/core';
import { ImagesComponent } from "../images/images.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ImagesComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
