import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AditionalContentComponent } from './components/aditional-content/aditional-content.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { HeadingComponent } from './components/heading/heading.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TableComponent } from './components/table/table.component';

const declarations = [
  AccordionComponent,
  AditionalContentComponent,
  HeadingComponent,
  NavMenuComponent,
  SearchInputComponent,
  TableComponent,
];
const exports = [
  AccordionComponent,
  AditionalContentComponent,
  HeadingComponent,
  NavMenuComponent,
  SearchInputComponent,
  TableComponent,
];
@NgModule({
  declarations,
  imports: [CommonModule],
  exports,
})
export class SharedModule {}
