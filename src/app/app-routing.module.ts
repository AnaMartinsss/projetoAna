import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardapioComponent } from "./cardapio/cardapio.component";
import { MemoriaComponent } from "./memoria/memoria.component";
import { InicioComponent } from "./inicio/inicio.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "jogo", component: MemoriaComponent },
  { path: "cardapio", component: CardapioComponent },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
