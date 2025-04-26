import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Observable, map } from 'rxjs';
import { AuthenticatedService } from '../services/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
    private authenticatedService: AuthenticatedService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    if (isPlatformBrowser(this.platformId)) {
      return this.authenticatedService.isAuthenticated().pipe(
        map(isAuth => {
          if (isAuth) {
            return true;
          } else {
            return this.router.createUrlTree(['/login'], {
              queryParams: { returnUrl: state.url }
            });
          }
        })
      );
    } else {
      return new Observable<boolean>(observer => {
        observer.next(false);
        observer.complete();
      });
    }
  }
}
