import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estudos-eventos',
  imports: [CommonModule],
  templateUrl: './estudos-eventos.html',
  styleUrl: './estudos-eventos.css'
})
export class EstudosEventos {

  variavel = 'Não clicou';
  variavel1 = 'Esta fora';
    teste() {
      if (this.variavel === "Não clicou"){
        this.variavel = "Clicou"
      }
      else{
        this.variavel = "Não clicou"
      }
    }
    teste1() {
      if (this.variavel1 === "Esta fora"){
        this.variavel1 = "Esta dentro"
      }
      else{
        this.variavel1 = "Não clicou"
      }
    }
}
