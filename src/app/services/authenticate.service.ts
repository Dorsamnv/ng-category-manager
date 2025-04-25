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
  // boolean =localStorage.getItem('token') ? true : false;
  
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: any   // حتما Inject شود
  ) {}

  login(data: { username: string, password: string }): Observable<{ token: string }> {
    const loginUrl = this.serviceUrl;
    return this.http.post<{ token: string }>(loginUrl, data);
  }

}
