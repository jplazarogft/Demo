import { Component, OnInit, Input } from '@angular/core';
import { ComponentProperty } from '@sharedModels/component-property';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  @Input() url = '';
  @Input() properties?: ComponentProperty[] = [];

  constructor() {}

  ngOnInit() {}
}
