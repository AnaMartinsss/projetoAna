import { Component } from "@angular/core";

@Component({
  selector: "app-memoria",
  templateUrl: "./memoria.component.html",
  styleUrls: ["./memoria.component.css"],
})
export class MemoriaComponent {
  title = "ProjetojogodamemoriaAnaLaura";
  lista: card[] = [];
  click_anterior = "";
  elemento_ant = document.createElement("div");

  constructor() {
    for (let i = 0; i < 8; i++) {
      this.lista.push({
        imagem_verso: "assets/capa.jpeg",
        imagem_frente: "assets/" + i + ".PNG",
        identificador: "" + i,
      });
      this.lista.push({
        imagem_verso: "assets/capa.jpeg",
        imagem_frente: "assets/" + i + ".PNG",
        identificador: "" + i,
      });
    }
  }

  public trocar_card(evt: any, imagem: any, identificador: any) {
    var elemento = evt.srcElement;
    elemento.style.background = "url(" + imagem + ")";
    elemento.style.backgroundSize = "cover";
    if (this.click_anterior == "") {
      this.click_anterior = identificador;
      this.elemento_ant = elemento;
    } else {
      if (this.click_anterior == identificador) {
        this.click_anterior = "";
      } else {
        this.click_anterior = "";
        setTimeout(() => {
          elemento.style.background = "url( assets/capa.jpeg )";
          elemento.style.backgroundSize = "cover";
          this.elemento_ant.style.background = "url( assets/capa.jpeg )";
          this.elemento_ant.style.backgroundSize = "cover";
        }, 500);
      }
    }
  }
}
export interface card {
  imagem_verso: string;
  imagem_frente: string;
  identificador: string;
}
