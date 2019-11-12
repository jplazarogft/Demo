import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { NavMenuOption } from '@sharedModels/nav-menu-option';

type NewType = ElementRef;

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  @Input() menu?: NavMenuOption[] = [];
  @Input() activeOption = '';
  @Output() menuLinkClicked = new EventEmitter<NavMenuOption>();
  @ViewChild('menuUL', { static: false }) menuUL: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  menuClick = (event, menuOption: NavMenuOption) => {
    event.preventDefault();
    const el = event.currentTarget;
    this.updateActive(el);
    this.menuLinkClicked.emit(menuOption);
  };

  updateActive = (element: HTMLElement) => {
    if (!element || element.classList.contains('active')) {
      return false;
    }
    // try to find active option, then remove it
    const activeOption = this.menuUL.nativeElement.querySelector('li>a.active');
    if (activeOption) {
      this.renderer.removeClass(activeOption, 'active');
    }
    // add active class to clicked element
    this.renderer.addClass(element, 'active');
  };
}
