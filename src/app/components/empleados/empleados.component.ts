import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../service/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html'
})
export class EmpleadosComponent implements OnInit {

  public empleados: Empleado[];
  public editState: boolean = false;
  empleadoToEdit: Empleado;

  constructor(private _empleadoService: EmpleadoService) { }

  ngOnInit() {
    this._empleadoService.getEmpleados().subscribe(empleados => {
      this.empleados = empleados;
    })
  }

  editEmpleado(event, empleado: Empleado){
    this.editState = true;
    this.empleadoToEdit = empleado;
  }

  updateEmpleado(empleado: Empleado){
    this._empleadoService.updateEmpleado(empleado);
    this.clearState();
  }

  deleteEmpleado(event, empleado: Empleado){
    this._empleadoService.deleteEmpleado(empleado);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.empleadoToEdit = null;
  }

}
