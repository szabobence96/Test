import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://us-central1-ria-server-b1103.cloudfunctions.net';

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/authenticate`;

    const body = {
      data: {
        email: email,
        password: password,
      },
    };

    return this.http.post(url, body).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}

