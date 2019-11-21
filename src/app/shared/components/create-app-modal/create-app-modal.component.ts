import { Component, OnInit } from '@angular/core';
import { Icon } from '@sharedModels/icon';
import { homeIcons } from '@mocks/icons';

@Component({
  selector: 'app-create-app-modal',
  templateUrl: './create-app-modal.component.html',
  styleUrls: ['./create-app-modal.component.scss'],
})
export class CreateAppModalComponent implements OnInit {
  icons: Icon[] = homeIcons;
  title = 'Create application';
  constructor() {}

  ngOnInit() {}
}
