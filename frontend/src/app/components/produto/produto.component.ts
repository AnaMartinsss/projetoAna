import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"],
})
export class ProdutoComponent {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ["", Validators.required],
      descricao: ["", Validators.required],
      preco: ["", Validators.required],
      categoria: ["", Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    // pare aqui se o formulário for inválido
    if (this.form.invalid) {
      alert("Formulário inválido");
      return;
    }
    console.log(this.f["nome"].value);
    this.loading = true;
  }

  // 
  get f() {
    return this.form.controls;
  }
}
