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
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// instalados
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home/home.component';
import { AvisoPrivacidadComponent } from './aviso-privacidad/aviso-privacidad.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FrequentlyAskedComponent } from './frequently-asked/frequently-asked.component';
import { ArticleDialogComponent } from './home/article-dialog/article-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvisoPrivacidadComponent,
    ContactoComponent,
    AboutUsComponent,
    FrequentlyAskedComponent,
    ArticleDialogComponent
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
    MatDialogModule,
    BrowserAnimationsModule // Browser Animation, Must for pop-up menu
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
