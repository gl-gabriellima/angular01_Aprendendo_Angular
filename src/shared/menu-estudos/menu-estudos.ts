import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-menu-estudos',
  imports: [ CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu-estudos.html',
  styleUrl: './menu-estudos.css'
})
export class MenuEstudos {

}
