import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AditionalContentComponent } from './components/aditional-content/aditional-content.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { HeadingComponent } from './components/heading/heading.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TableComponent } from './components/table/table.component';
import { LearnMoreIconComponent } from './components/learn-more/learn-more-icon/learn-more-icon.component';

const declarations = [
  AccordionComponent,
  AditionalContentComponent,
  HeadingComponent,
  LearnMoreIconComponent,
  LearnMoreComponent,
  NavMenuComponent,
  SearchInputComponent,
  TableComponent,
];
const exports = [
  AccordionComponent,
  AditionalContentComponent,
  HeadingComponent,
  LearnMoreComponent,
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
