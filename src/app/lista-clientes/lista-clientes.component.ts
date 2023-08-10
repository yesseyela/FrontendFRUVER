import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit{

    clientes: Observable<ClienteModel[]> | undefined;
    constructor(
      private clienteService: ClienteService
    ) { }
  
    ngOnInit(): void {
      //lo que necesitamos que pase cuando inicie
      this.clientes = this.clienteService.obtenerClientes();
    }
  
    borrarCliente(idCliente: number) {
      this.clienteService.borrarCliente(idCliente).subscribe( data => {
        console.log("Registro Eliminado");
        this.ngOnInit();
      });
    }
  }
