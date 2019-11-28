import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavMenuOption } from '@sharedModels/nav-menu-option';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.scss'],
})
export class PageMenuComponent implements OnInit {
  @Input() menu?: NavMenuOption[] = [];
  @Input() activeOption: number = null;
  @Output() menuLinkClicked = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  updateActiveMenu = event => this.menuLinkClicked.emit(event);
}
