import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { FooterMenuComponent } from './components/footer/footer-menu/footer-menu.component';
import { HeaderComponent } from './components/header/header.component';

// Services
import { ApiService } from '@coreServices/api.service';
import { UserService } from '@coreServices/user.service';

const providers = [ApiService, UserService];
const components = [FooterComponent, FooterMenuComponent, HeaderComponent];

const imports = [CommonModule, HttpClientModule];

@NgModule({
  declarations: [...components],
  imports,
  providers,
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
