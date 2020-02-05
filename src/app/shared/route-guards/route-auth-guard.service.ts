import { Injectable } from "@angular/core";
import { CanLoad } from '@angular/router';

@Injectable()
export class RouteAuthGuard implements CanLoad {

  constructor(

  ) {

  }

  canLoad(): boolean {
    return true;
  }
}

//load is used for loading first time 
