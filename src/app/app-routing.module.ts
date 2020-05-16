import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Componentes
import { AvisoPrivacidadComponent } from './aviso-privacidad/aviso-privacidad.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
              { path: '', component: HomeComponent },
              { path: 'aviso-privacidad', component: AvisoPrivacidadComponent },
              { path: 'contacto', component: ContactoComponent }
             ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
