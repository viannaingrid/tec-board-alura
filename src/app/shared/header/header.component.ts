import { Component } from '@angular/core';
import { ImagesComponent } from "../images/images.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ImagesComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
