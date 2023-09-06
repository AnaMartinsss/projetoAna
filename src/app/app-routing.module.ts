import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardapioComponent } from "./cardapio/cardapio.component";
import { MemoriaComponent } from "./memoria/memoria.component";
import { InicioComponent } from "./inicio/inicio.component";
import { LoginComponent } from "./components/login/login.component";
import { Component } from '@angular/core'
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CadastroComponent } from "./components/cadastro/cadastro.component";

const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "cardapio", component: CardapioComponent },
  { path: "jogo", component: MemoriaComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
