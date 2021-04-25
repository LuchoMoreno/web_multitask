import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/servicios/auth.service';
@Component({
  selector: 'app-detallado-publicacion',
  templateUrl: './detallado-publicacion.component.html',
  styleUrls: ['./detallado-publicacion.component.css']
})
export class DetalladoPublicacionComponent implements OnInit {

  publicacion;
  esVistaCompleta;
  esSoloVista;
  user;
  constructor( private dialogRef: MatDialogRef<DetalladoPublicacionComponent>,
    @Inject(MAT_DIALOG_DATA) data, private authService:AuthService) { 
      this.publicacion = data.publicacion;
      this.esVistaCompleta=data.esVistaCompleta;
      this.esSoloVista=data.esSoloVista;
    }
    
    ngOnInit(): void {
    this.authService.buscarUsuarioLogueado();
    setTimeout(() => {     
      this.user=this.authService.user;
      let botones=document.getElementsByClassName("btnAcciones");
      if(this.user.id==this.publicacion.idUserQuePublico){
        for(let i=0; i<botones.length;i++)
        {
          botones[i]['disabled']=true;
        }
      }
    }, 300);
  }
  mostrarListaDeMisPublicaciones(){
      
  }
  scrollToElement(id){
    let element = document.getElementById(id);
    if (element != null) {
      scroll({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  }
  scrolear()
  {
    setTimeout(() => {
      
      this.scrollToElement('divContenedor');
    }, 500);

  }
}
