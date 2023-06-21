import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardapioComponent } from "./cardapio/cardapio.component";
import { MemoriaComponent } from "./memoria/memoria.component";
import { InicioComponent } from "./inicio/inicio.component";

const routes: Routes = [
  { path: "/", component: InicioComponent },
  { path: "jogo", component: MemoriaComponent },
  { path: "cardapio", component: CardapioComponent },
  { path: "", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
