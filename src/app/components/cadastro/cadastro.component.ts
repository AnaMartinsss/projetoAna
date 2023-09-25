import { ViewChild } from "@angular/core";
import { Component, ElementRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent {
  constructor(private fb: FormBuilder) {}
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
    console.log("login!");
    console.log(this.login.valid);
  }
}
