import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeBanner } from '../../welcome-banner/welcome-banner';
import { Search } from '../../search/search';
import { ConferenceList } from '../conference-list/conference-list';
import { Speakers } from '../../speakers/speakers';
import { Calendar } from '../../calendar/calendar';

@Component({
  selector: 'app-home',
  imports: [CommonModule, WelcomeBanner, Search, ConferenceList, Speakers, Calendar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  title: string = 'Home 4DAS I10';
  items: string[] = [];
  selectedItem: string = '4DAS I10';
  showList: boolean = false;

  constructor() {
    this.generateItems();
  }

  ngOnInit(): void {
    console.log('Le composant Home a été initialisé !');
  }

  generateItems(): void {
    this.items = Array.from({ length: 20 }, (_, i) => `4DAS I${i + 1}`);
  }

  toggleList(): void {
    this.showList = !this.showList;
  }

  onSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedItem = target.value;
    this.title = this.selectedItem;
    this.showList = false;
  }
}