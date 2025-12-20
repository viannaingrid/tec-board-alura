import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { ContentComponent } from "../../shared/content/content.component";
import { AboutCompanyComponent } from "../../shared/about-company/about-company.component";
import { FeaturesComponent } from "../../shared/features/features.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ContentComponent, AboutCompanyComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
