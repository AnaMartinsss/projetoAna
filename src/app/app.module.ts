import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { CardapioComponent } from './cardapio/cardapio.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoriaComponent,
    CardapioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
