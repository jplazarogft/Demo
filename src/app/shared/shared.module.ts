import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { HeadingComponent } from './components/heading/heading.component';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  declarations: [HeadingComponent, NavMenuComponent, SearchInputComponent, AccordionComponent],
  imports: [CommonModule],
  exports: [AccordionComponent, HeadingComponent, NavMenuComponent, SearchInputComponent],
})
export class SharedModule {}
