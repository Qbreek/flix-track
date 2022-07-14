import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss'],
})
export class UserDropdownComponent implements OnInit {
  userDropdownLinks = [
    { name: 'Account', icon: 'account_circle' },
    { name: 'Logout', icon: 'logout' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
