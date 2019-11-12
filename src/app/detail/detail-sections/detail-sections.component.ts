import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavMenuOption } from '@sharedModels/nav-menu-option';
import { NavMenuComponent } from 'src/app/shared/components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-detail-sections',
  templateUrl: './detail-sections.component.html',
  styleUrls: ['./detail-sections.component.scss'],
})
export class DetailSectionsComponent implements OnInit {
  @Input() sections: NavMenuOption[] = [];
  @Input() active = '';
  @Output() menuLinkClicked = new EventEmitter<NavMenuOption>();

  constructor() {}

  ngOnInit() {}

  emitClickEvent = event => this.menuLinkClicked.emit(event);
}
