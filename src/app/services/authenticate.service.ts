import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedService {
  readonly serviceUrl: string = environment.loginUrl + "/login";
  
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: any   // حتما Inject شود
  ) {}

  login(data: { username: string, password: string }): Observable<{
    accessToken: string;
    refreshToken: string;
    id: number;
    username: string;
    email: string;
  }> {
    return this.http.post<{
      accessToken: string;
      refreshToken: string;
      id: number;
      username: string;
      email: string;
    }>(this.serviceUrl, data);
  }
  

  isAuthenticated(): Observable<boolean> {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      return of(!!token);
    } else {
      return of(false);
    }
}}
