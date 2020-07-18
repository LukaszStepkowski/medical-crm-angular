import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable ({providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    // getAll() {
    //     return this.get<any[]>(`http://localhost:8099/users`);
    // }

    register(user) {
        return this.http.post(`http://localhost:8099/users/patients`, user);
    }

    delete(id) {
        return this.http.delete(`http://localhost:8099/users/patients/${id}`);
    }
}