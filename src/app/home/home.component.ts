import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/_models';
import { ServiceService } from '@app/auth';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user: User | null | undefined;


  constructor(
    private authService: ServiceService,
  ) { 
    this.authService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.authService.logout();
  }



}
