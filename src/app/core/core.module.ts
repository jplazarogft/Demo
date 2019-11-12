import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { FooterMenuComponent } from './components/footer/footer-menu/footer-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { UserFeedComponent } from './components/user-feed/user-feed.component';
import { UserFeedTagComponent } from './components/user-feed/user-feed-tag/user-feed-tag.component';

// Services
import { UserService } from './services/user.service';

// Modules
import { SharedModule } from '../shared/shared.module';
import { ProgressComponent } from './components/user-feed/progress/progress.component';

const providers = [UserService];
const components = [
  FooterComponent,
  FooterMenuComponent,
  HeaderComponent,
  ProgressComponent,
  UserFeedComponent,
  UserFeedTagComponent,
];

const imports = [CommonModule, SharedModule];

@NgModule({
  declarations: [...components],
  imports,
  providers,
  exports: [HeaderComponent, FooterComponent, UserFeedComponent],
})
export class CoreModule {}
