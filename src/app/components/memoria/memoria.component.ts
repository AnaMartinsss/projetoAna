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

  gerarNum() {
    const maxNumbers = 8;
    let randomNumber;
    let tmp;
    let list = [];
    for (let i = 0; i < maxNumbers; i++) {
      list[i] = i;
    }
    for (let i = list.length; i; ) {
      randomNumber = (Math.random() * i--) | 0;
      tmp = list[randomNumber];
      // troca o número aleatório pelo atual
      list[randomNumber] = list[i];
      // troca o atual pelo aleatório
      list[i] = tmp;
    }

    return list;
  }

  constructor() {
    let pos = this.gerarNum();

    for (let i = 0; i < 16; i++) {
      this.lista.push({
        imagem_verso: "assets/capa.png",
        imagem_frente: "assets/" + pos[i < 8 ? i : i - 8] + ".PNG",
        identificador: "" + pos[i < 8 ? i : i - 8],
        
      });
    }
  }

  public trocar_card(evt: any, imagem: any, identificador: any) {
    let elemento = evt.srcElement;
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
          elemento.style.background = "url( assets/capa.png )";
          elemento.style.backgroundSize = "cover";
          this.elemento_ant.style.background = "url( assets/capa.png )";
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
