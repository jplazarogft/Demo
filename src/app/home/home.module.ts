import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeFiltersComponent } from './home-filters/home-filters.component';
import { HomeHeadingComponent } from './home-heading/home-heading.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';

@NgModule({
  declarations: [HomeComponent, HomeFiltersComponent, HomeMenuComponent, HomeHeadingComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule],
})
export class HomeModule {}
