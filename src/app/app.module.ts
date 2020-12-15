import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// instalados
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

// Modulos
import { HomeComponent } from './home/home.component';
import { AvisoPrivacidadComponent } from './aviso-privacidad/aviso-privacidad.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FrequentlyAskedComponent } from './frequently-asked/frequently-asked.component';
import { LoginComponent } from './login/login.component';

var config = {
    apiKey: "AIzaSyBRINpMEaLDDVf-EcPVT0effC1m8uQF73I",
    authDomain: "alcont-fdc1a.firebaseapp.com",
    databaseURL: "https://alcont-fdc1a.firebaseio.com",
    projectId: "alcont-fdc1a",
    storageBucket: "alcont-fdc1a.appspot.com",
    messagingSenderId: "131014670357"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvisoPrivacidadComponent,
    ContactoComponent,
    AboutUsComponent,
    FrequentlyAskedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    CarouselModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    BrowserAnimationsModule, // Browser Animation, Must for pop-up menu
    MatSnackBarModule
  ],
  exports: [MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
