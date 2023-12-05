import { Component } from "@angular/core";

@Component({
  selector: "app-descricao",
  templateUrl: "./descricao.component.html",
  styleUrls: ["./descricao.component.css"],
})
export class DescricaoComponent {
  guaca: number;
  bacon: number;
  tomate: number;
  queijo: number;
  jalapeno: number;
  preco: number;

  constructor() {
    this.guaca = 1;
    this.bacon = 1;
    this.tomate = 1;
    this.queijo = 1;
    this.jalapeno = 1;
    this.preco = 20;
  }
  decrement(n: number) {
    switch (n) {
      case 1:
        if (this.guaca >= 1) {
          this.guaca--;
        //  this.preco -= 2;
          if (this.guaca >= 1) this.preco -= 2;
        }
        break;
      case 2:
        if (this.bacon >= 1) {
          this.bacon--;
         // this.preco -= 2;
          if (this.bacon >= 1) this.preco -= 2;
        }
        break;
      case 3:
        if (this.tomate >= 1) {
          this.tomate--;
         // this.preco -= 1;
          if (this.tomate >= 1) this.preco -= 1;
        }
        break;
      case 4:
        if (this.queijo >= 1) {
          this.queijo--;
         // this.preco -= 3;
          if (this.queijo >= 1) this.preco -= 3;
        }
        break;
      case 5:
        if (this.jalapeno >= 1) {
          this.jalapeno--;
          if (this.jalapeno >= 1) this.preco -= 0.5;
        }
        break;

      default:
        break;
    }
  }

  increment(n: number) {
    switch (n) {
      case 1:
        if (this.guaca < 5) {
          this.guaca++;
          //this.preco += 2;
          if (this.guaca > 1) this.preco += 2;
        }
        break;
      case 2:
        if (this.bacon < 5) {
          this.bacon++;
          //this.preco += 2;
          if (this.bacon > 1) this.preco += 2;
        }
        break;
      case 3:
        if (this.tomate < 5) {
          this.tomate++;
          //this.preco += 1;
          if (this.tomate > 1) this.preco += 1;
        }
        break;
      case 4:
        if (this.queijo < 5) {
          this.queijo++;
          //this.preco += 3;
          if (this.queijo > 1) this.preco += 3;
        }
        break;
      case 5:
        if (this.jalapeno < 5) {
          this.jalapeno++;
          if (this.jalapeno > 1) this.preco += 0.5;
        }
        break;
    }
  }
}
