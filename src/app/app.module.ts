import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; // must be imported as the last module as it contains the fallback route

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

// Modules
const imports = [BrowserModule, CoreModule, HomeModule, LoginModule, AppRoutingModule];

@NgModule({
  declarations: [AppComponent],
  imports,
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
