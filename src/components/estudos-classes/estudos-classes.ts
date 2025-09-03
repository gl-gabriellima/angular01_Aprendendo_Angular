import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-estudos-classes',
  imports: [NgClass],
  templateUrl: './estudos-classes.html',
  styleUrl: './estudos-classes.css'
})
export class EstudosClasses {
  titulo = "Estudando Diretiva de Classes"
  estaAtivo = true
  x = 20
  alternandoCard(){
    this.estaAtivo = !this.estaAtivo;
  }
  getClasseCard() {
    return this.x === 20 ? 'card card_ativo' : 'card card_inativo';
  }

}
