import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { AddEmpleadoComponent } from './components/add-empleado/add-empleado.component';

//Firebase
import { environment } from '../environments/environment';
import {  AngularFirestoreModule } from 'angularfire2/firestore';
import {  AngularFireModule } from 'angularfire2';

//Servicios
import { EmpleadoService } from './service/empleado.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmpleadosComponent,
    AddEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'empleados'),
    AngularFirestoreModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
