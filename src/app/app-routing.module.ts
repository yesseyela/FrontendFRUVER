import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';

const routes: Routes = [
  { path: 'productos', component: ListarProductosComponent },
  { path: 'productos/editar/:idProducto', component: EditarProductosComponent},
  { path: 'productos/agregar', component: EditarProductosComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'clientes', component: ListaClientesComponent},
  { path: 'clientes/editar/:idCliente', component: EditarClienteComponent},
  { path: 'clientes/agregar', component: EditarClienteComponent},
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
