import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteModel } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  BASE_URL = 'http://localhost:3000';

constructor(private http: HttpClient) { }


  obtenerClientes() {
    return this.http.get<ClienteModel[]>(`${this.BASE_URL}/clientes`);
  }

  //trae un producto por id
  obtenerCliente(idCliente: number) {
    return this.http.get<ClienteModel[]>(`${this.BASE_URL}/clientes/${idCliente}`);
  }

  agregarCliente(cliente: ClienteModel) {
    return this.http.post(`${this.BASE_URL}/clientes`, cliente);
  }

  actualizarCliente(cliente: ClienteModel) {
    return this.http.put(`${this.BASE_URL}/clientes/${cliente.idCliente}`, cliente);
  }

  borrarCliente(idCliente: number) {
    return this.http.delete(`${this.BASE_URL}/clientes/${idCliente}`);
  }
}
