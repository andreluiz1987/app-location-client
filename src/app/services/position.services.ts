import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PositionServices {
    constructor(private http: HttpClient) { }

    getPositions(): Observable<any> {
        return this.http.get<any>('http://localhost:3000/position/getLastPosition/');
    }
}