import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavMenuOption } from '@sharedModels/nav-menu-option';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  @Input() menu?: NavMenuOption[];
  @Output() menuLinkClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  updateActive = (event, activeLabel: string) => {
    event.preventDefault();
    this.menuLinkClicked.emit(activeLabel);
  };
}
