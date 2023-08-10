import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit{
  //variable que traiga el id del producto
  idCliente= '';
  cliente = new ClienteModel( 0,"","","");

  constructor(
    private clienteService: ClienteService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //cuando inicie el componente
    this.idCliente = this.route.snapshot.params['idProducto'];
    console.log('El id del producto es: ' + this.idCliente);
    if(this.idCliente) {
      //editar
      this.clienteService.obtenerClientes().subscribe( data => {
        this.cliente = data [0];
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
    if(this.cliente.idCliente){
      //viene de editar
      this.clienteService.actualizarCliente(this.cliente).subscribe( data => {
        console.log(data);
        this.router.navigate(['/clientes']);
      });
    } else {
      //viene de crear producto
      console.log('Nuevo producto');
      this.clienteService.agregarCliente(this.cliente).subscribe( data => {
        console.log(data);
        this.router.navigate(['/clientes']);
      });
    }
  }
}


