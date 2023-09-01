import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../_service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error?: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: ServiceService

  ) {
    // redirect to home if already logged in
    if (this.authService.userValue) {
      this.router.navigate(['/']);
   }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      company: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  get f() { return this.loginForm?.controls; }

  onSubmit() {
    this.submitted = true;
    this.error = '';

    if (this.loginForm?.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.f?.username.value, 
      this.f?.password.value, this.f?.company.value,
       this.f?.role.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([returnUrl]);
        },
        error: (error: any) => {
          this.error = error;
          this.loading = false;
        }
      });
  }

}
