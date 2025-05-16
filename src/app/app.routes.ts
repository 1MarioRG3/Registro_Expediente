import { Routes } from '@angular/router';
import { RegistrarComponent } from './registrar/registrar.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

export const routes: Routes = [
  {path:'Registro_Expediente',component:HomeComponent},
  {path:'Registro_Expediente/registrar',component:RegistrarComponent},
  {path:'Registro_Expediente/info',component:InfoComponent}
];

