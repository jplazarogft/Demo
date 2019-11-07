import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import { NavMenuOption } from '@sharedModels/nav-menu-option';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss'],
})
export class HomeMenuComponent implements OnInit {
  @Input() menu?: NavMenuOption[] = [];
  @Output() menuLinkClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  updateActiveMenu = event => this.menuLinkClicked.emit(event);
}
