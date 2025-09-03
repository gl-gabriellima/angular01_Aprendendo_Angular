import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-estudos-ngstyle',
  imports: [NgClass, NgStyle],
  templateUrl: './estudos-ngstyle.html',
  styleUrl: './estudos-ngstyle.css'
})
export class EstudosNgstyle {
  titulo = "Estudando Diretiva de Estilos"
  tamanho = 12
  verdade = true
}
