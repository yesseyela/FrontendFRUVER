import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoModel } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  obtenerProductos() {
    return this.http.get<ProductoModel[]>(`${this.BASE_URL}/productos`);
  }

  //trae un producto por id
  obtenerProducto(idProducto: number) {
    return this.http.get<ProductoModel[]>(`${this.BASE_URL}/productos/${idProducto}`);
  }

  agregarProducto(producto: ProductoModel) {
    return this.http.post(`${this.BASE_URL}/productos`, producto);
  }

  actualizarProducto(producto: ProductoModel) {
    return this.http.put(`${this.BASE_URL}/productos/${producto.idProducto}`, producto);
  }

  borrarProducto(idProducto: number) {
    return this.http.delete(`${this.BASE_URL}/productos/${idProducto}`);
  }
}
