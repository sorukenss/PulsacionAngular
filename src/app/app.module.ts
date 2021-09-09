import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from './menu/menu.component';
import { RegistrarComponent } from './page/registrar/registrar.component';
import { ConsultarComponent } from './page/consultar/consultar.component';
import { FormsModule } from '@angular/forms';
import { ModificarComponent } from './page/modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    RegistrarComponent,
    ConsultarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
