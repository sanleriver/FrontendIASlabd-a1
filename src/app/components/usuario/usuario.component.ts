import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  user:User = <User>{};
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUser(event:User){
    this.user=event
    alert(this.userService.guardar(this.user));
  }

  getObject(event: string[]){
    console.log(this.userService.consultar(event[0], event[1], event[2], Number(event[3])))
  }

}
