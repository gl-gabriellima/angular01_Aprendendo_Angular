import { Routes } from '@angular/router';
import { EstudosClasses } from '../components/estudos-classes/estudos-classes';
import { EstudosNgstyle } from '../components/estudos-ngstyle/estudos-ngstyle';
import { Home } from '../components/home/home';
import { EstudosNgif } from '../components/estudos-ngif/estudos-ngif';
import { EstudosNgfor } from '../components/estudos-ngfor/estudos-ngfor';
import { EstudosEventos } from '../components/estudos-eventos/estudos-eventos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'Estudos01', component: EstudosClasses },
  { path: 'Estudos02', component: EstudosNgstyle },
  { path: 'Estudos03', component: EstudosNgif },
  { path: 'Estudos04', component: EstudosNgfor },
  { path: 'Estudos05', component: EstudosEventos },
];