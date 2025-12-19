import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { ContentComponent } from "../../shared/content/content.component";
import { AboutCompanyComponent } from "../../shared/about-company/about-company.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ContentComponent, AboutCompanyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
