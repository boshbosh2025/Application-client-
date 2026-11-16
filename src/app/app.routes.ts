import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home }, // Page d'accueil par défaut
  // On ajoutera d'autres routes plus tard (ex: { path: 'calendrier', component: Calendar })
];