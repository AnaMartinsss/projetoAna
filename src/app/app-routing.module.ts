import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardapioComponent } from "./components/cardapio/cardapio.component";
import { MemoriaComponent } from "./components/memoria/memoria.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { LoginComponent } from "./components/login/login.component";
import { CadastroComponent } from "./components/cadastro/cadastro.component";
import { PagamentoComponent } from "./components/pagamento/pagamento.component";

const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "cardapio", component: CardapioComponent },
  { path: "jogo", component: MemoriaComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "pagamento", component: PagamentoComponent },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
