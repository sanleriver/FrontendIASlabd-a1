import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';

@Injectable()
export class UserService {

  user:User = <User>{};
  constructor() { }

  guardar(user: User): string{
      return 'Los campos guardados son:' + user.identificacion + '-' + user.nombre + '-' + user.apellido + '-' + user.edad;
  }

  consultar(id: string, nombreS: string, apellidoS:string, edadS:number): User{
    return {identificacion: id,
            nombre: nombreS,
            apellido: apellidoS,
            edad: edadS}
  }
}
