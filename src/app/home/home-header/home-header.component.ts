import { Component, OnInit, Input } from '@angular/core';
import { Icon } from '@sharedModels/icon';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  @Input() icons: Icon[] = [];
  @Input() title = '';

  constructor() {}

  ngOnInit() {}
}
