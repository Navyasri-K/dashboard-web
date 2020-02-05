import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {

  public static handlers: { [key: string]: DetachedRouteHandle } = {};

  private static delete: string;

  /**
   * this method is used for delete route
   * @param name
   */
  public static deleteRouterSnapshot(name: string): void {
    if (CustomReuseStrategy.handlers[name]) {
      delete CustomReuseStrategy.handlers[name];
    }
    else
      CustomReuseStrategy.delete = name;
  }

  /**
   * this method returns true when route reuse later
   * @param route
   */
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (!route.routeConfig || route.routeConfig.loadChildren)
      return false;

    return true;
  }

  /**
   * this method is used to route the route state
   * @param route
   * @param handle
   */
  public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {

    if (CustomReuseStrategy.delete && CustomReuseStrategy.delete == this.getRouteUrl(route)) {
      CustomReuseStrategy.delete = null;
      return;
    }

    CustomReuseStrategy.handlers[this.getRouteUrl(route)] = handle;
  }

  /**
   * attached route if already not present
   * @param route
   */
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {

    return !CustomReuseStrategy.handlers[this.getRouteUrl(route)];
  }

  /**
   * this method is used for retrieve state
   * @param route
   */
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {

    if (!route.routeConfig)
      return null;

    if (route.routeConfig.loadChildren)
      return null;

    return CustomReuseStrategy.handlers[this.getRouteUrl(route)];
  }

  /**
   * this method runs when user change route every time and
   * check current route want to use startegy or not
   * @param future
   * @param curr
   */
  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig &&
      JSON.stringify(future.params) === JSON.stringify(curr.params);
  }

  /**
   * find out actual route name and route the url
   * @param route
   */
  private getRouteUrl(route: ActivatedRouteSnapshot) {
    return route['_routerState'].url.replace(/\//g, '-')
  }
}
