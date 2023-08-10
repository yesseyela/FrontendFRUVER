import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from '../shared/producto.model';
import { ProductoService } from '../shared/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit{
   //defino la variable que va a recibir
   productos: Observable<ProductoModel[]> | undefined;
   constructor(
     private productoService: ProductoService
   ) { }
 
   ngOnInit(): void {
     //lo que necesitamos que pase cuando inicie
     this.productos = this.productoService.obtenerProductos();
   }
 
   borrarProducto(idProducto: number) {
     this.productoService.borrarProducto(idProducto).subscribe( data => {
       console.log("Registro Eliminado");
       this.ngOnInit();
     });
   }
 }
 
