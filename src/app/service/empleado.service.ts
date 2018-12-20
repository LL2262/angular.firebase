import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Empleado } from '../models/empleado';
import { Observable }  from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class EmpleadoService {

  public empleadosCollection: AngularFirestoreCollection<Empleado>;
  public empleados: Observable<Empleado[]>;
  public empleadosDoc: AngularFirestoreDocument<Empleado>;

  constructor(private afs: AngularFirestore) { 
    //this.empleados = afs.collection('empleados').valueChanges();
    this.empleadosCollection = afs.collection<Empleado>('empleados');
    this.empleados = this.empleadosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Empleado;
        const id = a.payload.doc.id;
        return {id, ...data }
      }))
    );
  }

  getEmpleados(){
    return this.empleados;
  }

  addEmpleado(empleado: Empleado){
    this.empleadosCollection.add(empleado);
  }

  updateEmpleado(empleado: Empleado){
    this.empleadosDoc = this.afs.doc(`empleados/${empleado.id}`);
    this.empleadosDoc.update(empleado);
  }

  deleteEmpleado(empleado: Empleado){
    this.empleadosDoc = this.afs.doc(`empleados/${empleado.id}`);
    this.empleadosDoc.delete();
  }

}
