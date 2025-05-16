import { Routes } from '@angular/router';
import { RegistrarComponent } from './registrar/registrar.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

export const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'/registrar',component:RegistrarComponent},
  {path:'/info',component:InfoComponent},
];

