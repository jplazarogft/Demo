import { NavMenuOption } from '@sharedModels/nav-menu-option';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  @Input() menu?: NavMenuOption[];
  constructor() {}

  ngOnInit() {}
}
