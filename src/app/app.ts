import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuEstudos } from '../shared/menu-estudos/menu-estudos';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuEstudos, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_03');
  
  mensagemRecebida: string = '';

  receberDoFilho(mensagem: string) {
    this.mensagemRecebida = mensagem;
    console.log('Pai recebeu:', mensagem);
  }

}

