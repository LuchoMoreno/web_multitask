import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';

//cambiar
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() mostrarHamburger=true;
  @Input() userIsLogged;
  //habria que convertir en input el usuario, lo deberia mandar desde la pagina -s
  user: Usuario;
  currentUser$: Observable<Usuario>;



  @Output() ingresarEventClick:EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.userIsLogged = this.authService.isLogged;
    //cambiar
    this.currentUser$ = this.authService.obtenerUsuario$();
    this.currentUser$.subscribe(usuarios => {
      this.user = usuarios;
    });
    this.authService.actualizarUsuario();

  }

  SendEventClickJHamburgerMenu(){

  }

  enviarEventoDeIngreso(){
    this.ingresarEventClick.emit();
  }
}
