import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StarService implements OnInit {
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  updatePortfolio(coin: object, userId: number): Observable<any> {
    const token: any = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + token,
    });
    let options = { headers };
    let body = { coin };
    return this.http
      .put<any>(`http://localhost:3000/api/portfolio/${userId}`, body, options)
      .pipe(map((res: any) => {
        return res;
      }));
  }
}
