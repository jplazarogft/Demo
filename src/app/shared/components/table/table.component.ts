import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() dependencies: Project[] = null;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const { dependencies } = changes;
    if (dependencies.currentValue !== null && dependencies.currentValue.length > 0) {
      console.log(
        '===',
        dependencies.currentValue.filter(x => x.projectTypeId === 2),
      );
    }
  }
}
