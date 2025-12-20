import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { ImagesComponent } from "../images/images.component";

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, CardComponent, ImagesComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  headerTitle = 'Funcionalidades Principais';
  cards = [
    {
      title: 'Grupos de discussão',
      description:
        'Participe de grupos organizados por temas, linguagens e áreas da tecnologia. Troque ideias, tire dúvidas e compartilhe experiências com pessoas que vivem o mesmo momento que você.',
      image: '../../../assets/img/icon-grupo.png',
    },
    {
      title: 'Calendário de eventos',
      description:
        'Fique por dentro de eventos, workshops, lives e encontros da comunidade. Acompanhe datas importantes e nunca perca uma oportunidade de aprendizado.',
      image: '../../../assets/img/icon-calendario.png',
    },
    {
      title: 'Recursos compartilhados',
      description:
        'Acesse e compartilhe materiais, links úteis, artigos, ferramentas e conteúdos exclusivos, tudo organizado para facilitar o aprendizado e o desenvolvimento profissional.',
      image: '../../../assets/img/icon-arquivos-compartilhados.png',
    },
  ];
}
