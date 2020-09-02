import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    alert(this.username + " " + this.password);
  }

  clear(): void {
    this.username = "";
    this.password = "";
  }

  logout(): void {
    alert("Logged out succesfully!");
  }

}