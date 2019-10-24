import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// Services
import { AuthenticationService } from './authentication/authentication.service';
import { UserService } from './services/user.service';

// Modules
import { SharedModule } from '../shared/shared.module';

const providers = [AuthenticationService, UserService];
const declarations = [HeaderComponent, FooterComponent];
const imports = [CommonModule, SharedModule];

@NgModule({
  declarations,
  imports,
  providers,
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
