import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MemoriaComponent } from "./components/memoria/memoria.component";
import { CardapioComponent } from "./components/cardapio/cardapio.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InicioComponent } from "./components/inicio/inicio.component";
import { LoginComponent } from "./components/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CadastroComponent } from "./components/cadastro/cadastro.component";
import { PagamentoComponent } from './pagamento/pagamento.component';
import { PagAppComponent } from './pag-app/pag-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoriaComponent,
    CardapioComponent,
    InicioComponent,
    LoginComponent,
    CadastroComponent,
    PagamentoComponent,
    PagAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
