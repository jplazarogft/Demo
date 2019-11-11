import { Component, OnInit, Input } from '@angular/core';
import { Icon } from '@sharedModels/icon';

@Component({
  selector: 'app-home-heading',
  templateUrl: './home-heading.component.html',
  styleUrls: ['./home-heading.component.scss'],
})
export class HomeHeadingComponent implements OnInit {
  @Input() icons: Icon[] = [];
  @Input() title = '';

  constructor() {}

  ngOnInit() {}
}
