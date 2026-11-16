import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Conference {
  picture: string;
  title: string;
  date: string;
  adress: string;
  available_Places: number;
  // La propriété est plus claire si on la nomme exactement avec le bon libellé métier
  // availablePlaces est une alternative plus standard en JavaScript, mais ici on garde le nom demandé.
}

@Component({
  selector: 'app-list-conf',
  imports: [CommonModule],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css'
})
export class ListConf {
  conferences: Conference[] = [
    {
      picture: 'https://via.placeholder.com/150/0000FF/808080?text=Angular',
      title: 'Conférence Angular 21',
      date: '15 Décembre 2026',
      adress: 'Paris, France',
      available_Places: 50
    },
    {
      picture: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=IA',
      title: 'L\'Intelligence Artificielle',
      date: '20 Janvier 2027',
      adress: 'Tunis, Tunisie',
      available_Places: 0
    },
    {
      picture: 'https://via.placeholder.com/150/008000/FFFFFF?text=Web',
      title: 'Le Web Moderne',
      date: '05 Février 2027',
      adress: 'En ligne',
      available_Places: 120
    }
  ];
}
