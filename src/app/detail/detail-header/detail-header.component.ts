import { Component, OnInit, Input } from '@angular/core';
import { Icon } from '@sharedModels/icon';

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.scss'],
})
export class DetailHeaderComponent implements OnInit {
  @Input() icons: Icon[] = [];
  @Input() icon = '';
  @Input() title = '';

  constructor() {}

  ngOnInit() {}
}
