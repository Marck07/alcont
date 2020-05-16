import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AvisoPrivacidadComponent } from './aviso-privacidad/aviso-privacidad.component';


const routes: Routes = [
              { path: '', component: HomeComponent },
              { path: 'aviso-privacidad', component: AvisoPrivacidadComponent }
             ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
