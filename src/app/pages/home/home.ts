import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Conference {
  id: number;
  title: string;
  description: string;
  date: Date;
  place: string;
  maxParticipants: number;
  nbParticipants: number;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  user = {
    nom: 'Ahmed',
    email: 'ahmed@email.com'
  };

  amis = ['Sami', 'Sarra', 'Amine'];

  notificationsCount = 2;
  showNotifications = false;

  searchTitle = '';

  list: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: "Découvrez les nouveautés d'Angular.",
      date: new Date('2027-11-15'),
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 25
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur les Signals.',
      date: new Date('2027-11-30'),
      place: 'Ariana',
      maxParticipants: 20,
      nbParticipants: 14
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Le futur du Web.',
      date: new Date('2027-11-20'),
      place: 'Sousse',
      maxParticipants: 100,
      nbParticipants: 100
    }
  ];

  get filteredConferences(): Conference[] {
    const search = this.searchTitle.trim().toLowerCase();

    if (!search) {
      return this.list;
    }

    return this.list.filter((conference) =>
      conference.title.toLowerCase().includes(search)
    );
  }

  getPlacesRestantes(conf: Conference): number {
    return conf.maxParticipants - conf.nbParticipants;
  }

  inscrire(conf: Conference): void {
    if (conf.nbParticipants < conf.maxParticipants) {
      conf.nbParticipants++;
    }
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }
}
