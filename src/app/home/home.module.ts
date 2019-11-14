import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeFiltersComponent } from './home-filters/home-filters.component';
import { HomeHeaderComponent } from './home-header/home-header.component';

@NgModule({
  declarations: [HomeComponent, HomeFiltersComponent, HomeHeaderComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule],
})
export class HomeModule {}
