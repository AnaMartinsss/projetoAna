import { ViewChild } from "@angular/core";
import { Component, ElementRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent {
  constructor(private fb: FormBuilder, private router: Router) {}
  cadastro!: FormGroup;
  login!: FormGroup;

  ngOnInit(): void {
    this.cadastro = this.fb.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      pass: [null, Validators.required],
    });

    this.login = this.fb.group({
      email_login: [null, [Validators.required, Validators.email]],
      pass_login: [null, Validators.required],
    });
  }

  @ViewChild("container") container: ElementRef<HTMLDivElement> | undefined;

  activeRightPanel: boolean = false;

  click() {
    console.log("click");
    if (!this.activeRightPanel) {
      this.container?.nativeElement.classList.add("right-panel-active");
      this.activeRightPanel = true;
    } else {
      this.container?.nativeElement.classList.remove("right-panel-active");
      this.activeRightPanel = false;
    }
  }
  // CRIAR CONTA
  createAccount() {
    console.log("criar conta!");
    console.log(this.cadastro.valid);
  }

  // LOGIN
  loginAccount() {
    // validate login
    console.log("login!");
    console.log(this.login);

    if (
      this.login.value.email_login === "admin" &&
      this.login.value.pass_login === "admin"
    ) {
      console.log("login com sucesso!");
      // redirecionar p pagina de admin
      this.router.navigate(["/"]);
    }
  }
}
