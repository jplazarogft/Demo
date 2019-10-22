import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// Services
import { AuthenticationService } from './authentication/authentication.service';
import { UserService } from './services/user.service';

const providers = [AuthenticationService, UserService];
const declarations = [HeaderComponent, FooterComponent];

@NgModule({
  declarations,
  imports: [CommonModule],
  providers,
})
export class CoreModule {}
