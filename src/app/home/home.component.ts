import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '@app/auth';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user? Users | null;


  constructor(
    private authService: ServiceService,
  ) { 
    this.authService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.authService.logout();
  }



}
