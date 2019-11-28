import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { NavMenuOption } from '@sharedModels/nav-menu-option';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavMenuComponent implements OnInit {
  @Input() menu?: NavMenuOption[] = [];
  @Input() activeOption = 0;
  @Input() itemTemplate: TemplateRef<HTMLElement>;
  @Output() menuLinkClicked = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  menuClick = (event, menuOption: number) => {
    event.preventDefault();
    this.menuLinkClicked.emit(menuOption);
  };
}
