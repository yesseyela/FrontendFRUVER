import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';
import { ProductoService } from './shared/producto.service';
import { InicioComponent } from './inicio/inicio.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ClienteService } from './shared/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent,
    EditarProductosComponent,
    InicioComponent,
    ListaClientesComponent,
    EditarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductoService,
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
