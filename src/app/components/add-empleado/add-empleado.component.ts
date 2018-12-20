import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../service/empleado.service';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html'
})
export class AddEmpleadoComponent implements OnInit {

  public empleado: Empleado={
    nombre: '',
    apellido: '',
    email: '',
    dni: '',
    direccion: '',
    ciudad: ''
  }

  constructor(private _empleadoService: EmpleadoService) {
    
   }

  ngOnInit() {
  }

  onSubmit(){
    this._empleadoService.addEmpleado(this.empleado);
  }

}
