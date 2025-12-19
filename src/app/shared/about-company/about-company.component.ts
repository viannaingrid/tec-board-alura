
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { ImagesComponent } from "../images/images.component";


@Component({
  selector: 'app-about-company',
  standalone: true,
  imports: [CommonModule, CardComponent, ImagesComponent],
  templateUrl: './about-company.component.html',
  styleUrl: './about-company.component.scss'
})
export class AboutCompanyComponent {
  headerTitle = "Sobre o TecBoard";
  cards = [
    {
      title: "Missão",
      description: "Nossa missão é democratizar o acesso ao conhecimento em tecnologia, criando um ambiente colaborativo onde pessoas possam aprender, trocar experiências e evoluir juntas.",
      image: "../../../assets/img/icon-comunicacao.png",
    },
    {
      title: "Visão do Projeto",
      description: "Ser uma referência em comunidade tech, conectando estudantes, desenvolvedores e profissionais que buscam crescimento contínuo, inovação e networking de qualidade.",
      image: "../../../assets/img/icon-pessoa.png"
    },
    {
      title: "O que o TecBoard resolve",
      description: "O TecBoard resolve a dificuldade de encontrar conteúdo confiável, interação real e oportunidades em tecnologia em um único lugar, centralizando informações, discussões e recursos para quem quer crescer na área.",
      image: "../../../assets/img/icon-pasta-documents.png"
    }
  ]

}
