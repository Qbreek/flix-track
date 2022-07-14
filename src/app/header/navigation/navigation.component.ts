import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  // navigationLinks = ['Home', 'Movies', 'TV Show', 'My List'];
  navigationLinks = [
    { name: 'Home', icon: 'home' },
    { name: 'Movies', icon: 'movie' },
    { name: 'TV Show', icon: 'tv' },
    { name: 'My List', icon: 'list' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
