import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../_models';

@Injectable ({providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    get(id: number) {
        return this.http.get(`/patients/${id}`);
    }

    register(user) {
        return this.http.post(`/patients`, user);
    }

    delete(id: number) {
        return this.http.delete(`/patients/${id}`);
    }
}