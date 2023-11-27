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
import { PagamentoComponent } from "./components/pagamento/pagamento.component";
import { AplicativoComponent } from "./components/aplicativo/aplicativo.component";
import { ProdutoComponent } from "./components/produto/produto.component";
import { EntregaComponent } from "./components/entrega/entrega.component";
import { DescricaoComponent } from "./components/descricao/descricao.component";
import { AdminPageComponent } from "./components/admin-page/admin-page.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { ReservaComponent } from './components/reserva/reserva.component';
@NgModule({
  declarations: [
    AppComponent,
    MemoriaComponent,
    CardapioComponent,
    InicioComponent,
    LoginComponent,
    CadastroComponent,
    PagamentoComponent,
    AplicativoComponent,
    ProdutoComponent,
    EntregaComponent,
    DescricaoComponent,
    AdminPageComponent,
    ReservaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
