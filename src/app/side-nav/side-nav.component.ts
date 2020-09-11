import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openNav(): void {
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav(): void {
    document.getElementById("mySidenav").style.width = "0";
  }
}
