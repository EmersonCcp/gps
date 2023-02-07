import { ParseError } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaPrincipalModule } from './modules/pagina-principal/pagina-principal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PaginaPrincipalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
