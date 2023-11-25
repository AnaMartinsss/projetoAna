import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardapioComponent } from "./components/cardapio/cardapio.component";
import { MemoriaComponent } from "./components/memoria/memoria.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { LoginComponent } from "./components/login/login.component";
import { CadastroComponent } from "./components/cadastro/cadastro.component";
import { PagamentoComponent } from "./components/pagamento/pagamento.component";
import { AplicativoComponent } from "./components/aplicativo/aplicativo.component";
import { ProdutoComponent } from "./components/produto/produto.component";
import { EntregaComponent } from "./components/entrega/entrega.component";
import { DescricaoComponent } from "./components/descricao/descricao.component";
import { AdminPageComponent } from "./components/admin-page/admin-page.component";

const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "cardapio", component: CardapioComponent },
  { path: "jogo", component: MemoriaComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "pagamento", component: PagamentoComponent },
  { path: "aplicativo", component: AplicativoComponent },
  { path: "produto", component: ProdutoComponent },
  { path: "entrega", component: EntregaComponent },
  { path: "descricao", component: DescricaoComponent },
  { path: "admin", component: AdminPageComponent },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
