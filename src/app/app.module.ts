import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    PiePaginaComponent,
    UsuarioComponent,
    FormularioUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
