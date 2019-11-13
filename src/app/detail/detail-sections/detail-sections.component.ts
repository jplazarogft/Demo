import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentProperty } from '@sharedModels/component-property';
import { NavMenuOption } from '@sharedModels/nav-menu-option';

@Component({
  selector: 'app-detail-sections',
  templateUrl: './detail-sections.component.html',
  styleUrls: ['./detail-sections.component.scss'],
})
export class DetailSectionsComponent implements OnInit {
  @Input() active = '';
  @Input() sections: NavMenuOption[] = [];
  @Input() url = '';
  @Input() properties: ComponentProperty[] = [];
  @Output() menuLinkClicked = new EventEmitter<NavMenuOption>();

  constructor() {}

  ngOnInit() {}

  emitClickEvent = event => this.menuLinkClicked.emit(event);
}
