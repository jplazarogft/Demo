import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionMenuComponent } from './components/action-menu/action-menu.component';
import { AditionalContentComponent } from './components/aditional-content/aditional-content.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { IconGroupComponent } from './components/icon-group/icon-group.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';
import { LearnMoreIconComponent } from './components/learn-more/learn-more-icon/learn-more-icon.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TableComponent } from './components/table/table.component';

const declarations = [
  AccordionComponent,
  ActionMenuComponent,
  AditionalContentComponent,
  IconGroupComponent,
  LearnMoreComponent,
  LearnMoreIconComponent,
  NavMenuComponent,
  SearchInputComponent,
  TableComponent,
];
const exports = [
  AccordionComponent,
  ActionMenuComponent,
  AditionalContentComponent,
  IconGroupComponent,
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
