import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, Company } from '@app/_models';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User | null>;

  private companySubject: BehaviorSubject<Company>;
  public company: Observable<Company | null>;

  constructor(
    private router: Router,
    private http: HttpClient
    ) { 
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
      this.user = this.userSubject.asObservable();

      this.companySubject = new BehaviorSubject<Company>(JSON.parse(localStorage.getItem('company')!));
      this.company = this.companySubject.asObservable();
    }

  public get userValue(): User {
    return this.userSubject.value;
  }

  public get companyValue(): Company {
    return this.companySubject.value;
  }

  login(username: string, password: string, role: string, company: string) {
    return this.http.post<User>(`/users/authenticate`, { username, password, role, company })
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
  }));
}

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null!);
    this.router.navigate(['/auth/login']);
  }

  register(user: User) {
    return this.http.post(`/users/register`, user);
  }

  getAll() {
    return this.http.get<User[]>(`/users`);
  }

  getById(id: string) {
    return this.http.get<User>(`/users/${id}`);
  }

  update(id: number, params: any) {
    return this.http.put(`/users/${id}`, params)
      .pipe(map(x => {
        if (id === this.userValue.id) {
          const user = { ...this.userValue, ...params };
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
        }
        return x;
      }));
  }

  delete(id: number) {
    return this.http.delete(`/users/${id}`)
      .pipe(map(x => {
        if (id === this.userValue.id) {
          this.logout();
        }
        return x;
      }));
  }

  getAllCompanies() {
    return this.http.get<Company[]>(`/companies`);
  }

  getCompanyById(id: string) {
    return this.http.get<Company>(`/companies/${id}`);
  }

  updateCompany(id: number, params: any) {
    return this.http.put(`/companies/${id}`, params)
      .pipe(map(x => {
        if (id === this.companyValue.id) {
          const company = { ...this.companyValue, ...params };
          localStorage.setItem('company', JSON.stringify(company));
          this.companySubject.next(company);
        }
        return x;
      }));
  }

  deleteCompany(id: number) {
    return this.http.delete(`/companies/${id}`)
      .pipe(map(x => {
        if (id === this.companyValue.id) {
          this.logout();
        }
        return x;
      }));
  }


}
