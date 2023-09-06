import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {

  username = new FormControl('');


  login() {
    console.log("oi");
  }
}

