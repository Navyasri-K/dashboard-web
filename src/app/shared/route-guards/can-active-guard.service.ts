import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RoutingState } from './routing-state';

@Injectable()
export class CanActivatGuard implements CanActivate {

  previousRoute: string;

  constructor(
    private routingState: RoutingState,
    private router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    //if (route.routeConfig.path == '' || route.parent.routeConfig.path == '')
    //  return false;

    return true;
  }
}
