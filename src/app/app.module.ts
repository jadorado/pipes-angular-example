import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { SafeDomPipe } from './pipes/safe-dom.pipe';
import { PasswordPipe } from './pipes/password.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SafeDomPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'en' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
