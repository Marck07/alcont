import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// instalados
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home/home.component';
import { AvisoPrivacidadComponent } from './aviso-privacidad/aviso-privacidad.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvisoPrivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    CarouselModule,
    BrowserAnimationsModule // Browser Animation, Must for pop-up menu
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
