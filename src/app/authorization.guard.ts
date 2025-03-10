import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionService } from './core/services/session/session.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {


    constructor(private router: Router, private sessionService: SessionService)
    {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return this.sessionService.loggedOn$;
    }
}
