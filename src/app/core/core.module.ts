import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterMenuComponent } from './components/footer/footer-menu/footer-menu.component';

// Services
import { UserService } from './services/user.service';

// Modules
import { SharedModule } from '../shared/shared.module';

const providers = [UserService];
const declarations = [HeaderComponent, FooterComponent, FooterMenuComponent];
const imports = [CommonModule, SharedModule];

@NgModule({
  declarations,
  imports,
  providers,
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
