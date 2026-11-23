import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Conference {
  picture: string;
  title: string;
  date: string;
  adress: string;
  available_Places: number;
}

@Component({
  selector: 'app-list-conf',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css'
})
export class ListConf {
  searchTerm = '';

  conferences: Conference[] = [
    {
      picture: '/angular.svg',
      title: 'Conférence Angular 21',
      date: '15 Décembre 2026',
      adress: 'Paris, France',
      available_Places: 50
    },
    {
      picture: '/ai.svg',
      title: 'L\'Intelligence Artificielle',
      date: '20 Janvier 2027',
      adress: 'Tunis, Tunisie',
      available_Places: 0
    },
    {
      picture: '/web.svg',
      title: 'Le Web Moderne',
      date: '05 Février 2027',
      adress: 'En ligne',
      available_Places: 120
    }
  ];

  get filteredConferences(): Conference[] {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      return this.conferences;
    }

    return this.conferences.filter((conf) =>
      conf.title.toLowerCase().includes(term) ||
      conf.adress.toLowerCase().includes(term) ||
      conf.date.toLowerCase().includes(term)
    );
  }

  participate(conf: Conference): void {
    if (conf.available_Places > 0) {
      conf.available_Places -= 1;
    }
  }
}
