import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';


let users = [{ id: 1, firstName: 'Tlangelani', lastName: 'Maswanganye', username: 'Admin', password: 'admin', role: 'Admin', company: 'RedEmber', token: 'fake-jwt-token' }]//, 
    //{ id: 2, firstName: 'Mathapelo', lastName: 'Seokotsa', username: 'Mathapelo', password: 'password', role: 'Payroll', company: 'Xalati M', token: 'fake-jwt-token' }];

let companies = [{ id: 1, name: 'RedEmber', address: 'Pretoria', contact: '0123456789', email: 'maswanganyetlangelani@gmail.com' }, 
    { id: 2, name: 'Xalati M', address: 'Johannesburg', contact: '0123456789', email: 'larrymaswanganye@gmail.com' }];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return handleRuter();

        function handleRuter() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.endsWith('/companies') && method === 'GET':
                    return getCompanies();
                case url.endsWith('/users') && method === 'POST':
                    return createUser();
                case url.endsWith('/companies') && method === 'POST':
                    return createCompany();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                case url.match(/\/companies\/\d+$/) && method === 'DELETE':
                    return deleteCompany();
                default:
                    return next.handle(request);
            }
        }

        function authenticate() {
            const { company, username, password, role } = body;
            const user = users.find(x => x.username === username && x.password === password && x.role === role && x.company === company);
            if (!user) return error('Username or password is incorrect');
            return ok({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                role: user.role,
                company: user.company,
                token: 'fake-jwt-token'
            })
        }

        function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users.map(x => omitPassword(x)));
        }

        function getCompanies() {
            if (!isLoggedIn()) return unauthorized();
            return ok(companies);
        }

        function createUser() {
            const user = body

            if (users.find(x => x.username === user.username)) {
                return error(`Username  ${user.username} is already taken`);
            }

            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));

            return ok();
        }

        function createCompany() {
            const company = body

            if (companies.find(x => x.name === company.name)) {
                return error(`Company name ${company.name} is already taken`);
            }

            company.id = companies.length ? Math.max(...companies.map(x => x.id)) + 1 : 1;
            companies.push(company);
            localStorage.setItem('companies', JSON.stringify(companies));

            return ok();
        }

        function deleteUser() {
            if (!isLoggedIn()) return unauthorized();

            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }

        function deleteCompany() {
            if (!isLoggedIn()) return unauthorized();

            companies = companies.filter(x => x.id !== idFromUrl());
            localStorage.setItem('companies', JSON.stringify(companies));
            return ok();
        }

        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
                .pipe(delay(500));
        }

        function error(message: string) {
            return throwError({ error: { message } })
                .pipe(materialize(), delay(500), dematerialize());
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorized' } })
                .pipe(materialize(), delay(500), dematerialize());
        }

        function isLoggedIn() {
            // function is not implemented yet
            return true;
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }

        function omitPassword(user: { [x: string]: any; id?: number; firstName?: string; lastName?: string; username?: string; password: any; role?: string; company?: string; }) {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        }

    }
        
}

export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
    
}



