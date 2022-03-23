import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  @Output() eventUser = new EventEmitter<User>();
  @Output() getUser = new EventEmitter<string[]>();

  user: User = <User>{};

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    this.eventUser.emit(this.user);
  }

  consultar(){
    this.getUser.emit([this.user.identificacion,
                      this.user.nombre,
                      this.user.apellido,
                      this.user.edad.toString()])
  }
}
