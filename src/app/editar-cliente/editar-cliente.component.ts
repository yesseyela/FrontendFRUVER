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
    this.idCliente = this.route.snapshot.params['idCliente'];
    console.log('El id del cliente es: ' + this.idCliente);
    if(this.idCliente) {
      //editar
      this.clienteService.obtenerCliente(parseInt(this.idCliente)).subscribe( data => {
        this.cliente = data [0];
      }, error => {
        console.log(error);
      });
     } else {
        //agregar
        console.log('nuevo cliente');
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


