import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

}

const signtiplutton= document.getElementById("signup");
const signInButton= document.getElementById("signIn"); 
const container= document.getElementById("container");

signInButton?.addEventListener('click',() => {
container?.classList.add("right-panel-active");  
})

signInButton?.addEventListener('click',() => {
  container?.classList.remove("right-panel-active");  
  })

