import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estudos-ngfor',
  imports: [ CommonModule],
  templateUrl: './estudos-ngfor.html',
  styleUrl: './estudos-ngfor.css'
})


export class EstudosNgfor {
// Definindo o tipo fora da classe
  pessoas = [
    { nome: 'Gabriel', idade: 20 },
    { nome: 'Ana', idade: 25 },
    { nome: 'Lucas', idade: 30 },
    { nome: 'Lima', idade: 20},
    { nome: 'Lima', idade: 50}
  ];

}
