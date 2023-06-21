import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardapioComponent } from "./cardapio/cardapio.component";
import { MemoriaComponent } from "./memoria/memoria.component";

const routes: Routes = [
  { path: "jogo", component: MemoriaComponent },
  { path: "cardapio", component: CardapioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
