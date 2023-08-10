import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../shared/producto.service';
import { ProductoModel } from '../shared/producto.model';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent  implements OnInit{
  //variable que traiga el id del producto
  idProducto= '';
  producto = new ProductoModel( 0, "", "", 0,"");

  constructor(
    private productoService: ProductoService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //cuando inicie el componente
    this.idProducto = this.route.snapshot.params['idProducto'];
    console.log('El id del producto es: ' + this.idProducto);
    if(this.idProducto) {
      //editar
      this.productoService.obtenerProducto(parseInt(this.idProducto)).subscribe( data => {
        this.producto = data;
      }, error => {
        console.log(error);
      });
     } else {
        //agregar
        console.log('nuevo producto');
      }
    }


  onSubmit() {
    console.log('Formulario enviado');
    if(this.producto.idProducto){
      //viene de editar
      this.productoService.actualizarProducto(this.producto).subscribe( data => {
        console.log(data);
        this.router.navigate(['/productos']);
      });
    } else {
      //viene de crear producto
      console.log('Nuevo producto');
      this.productoService.agregarProducto(this.producto).subscribe( data => {
        console.log(data);
        this.router.navigate(['/productos']);
      });
    }
  }
}

