import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MasInfoComponent } from './mas-info/mas-info.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PaginaPrincipalComponent,
    NavbarComponent,
    HeroComponent,
    NosotrosComponent,
    MasInfoComponent,
    ProductosComponent,
  ],
  exports: [PaginaPrincipalComponent],
})
export class PaginaPrincipalModule {}
