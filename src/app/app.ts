import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Home } from './pages/home/home';
import { Footer } from './sharedComponent/footer/footer';
import { ListConf } from './list-conf/list-conf';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, Footer, ListConf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }