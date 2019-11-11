import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DetailRoutingModule } from './detail-routing.module';

import { DetailComponent } from './detail.component';
import { DetailHeaderComponent } from './detail-header/detail-header.component';

@NgModule({
  declarations: [DetailComponent, DetailHeaderComponent],
  imports: [CommonModule, DetailRoutingModule, SharedModule],
})
export class DetailModule {}
