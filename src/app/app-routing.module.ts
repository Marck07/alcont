import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Componentes
import { AvisoPrivacidadComponent } from './aviso-privacidad/aviso-privacidad.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FrequentlyAskedComponent } from './frequently-asked/frequently-asked.component';


const routes: Routes = [
              { path: '', component: HomeComponent },
              { path: 'aviso-privacidad', component: AvisoPrivacidadComponent },
              { path: 'contacto', component: ContactoComponent },
              { path: 'nosotros', component: AboutUsComponent },
              { path: 'preguntas-frecuentes', component: FrequentlyAskedComponent }
             ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
