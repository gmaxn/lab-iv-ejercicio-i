import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {

    if(this.username === "admin", this.password === "123456") {
      //alert("You logged successfully");
      this.router.navigate(['welcome']);
    }
    else {
      alert("Wrong credentials");
    }
  }

  clear(): void {
    this.username = "";
    this.password = "";
  }

  logout(): void {
    alert("Logged out successfully");
  }

}
