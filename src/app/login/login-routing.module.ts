import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthGuardService } from '../core/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class LoginRoutingModule {}
