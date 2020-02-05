import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    class: ""
  },
  {
    path: "/user",
    title: "User Profile",
    icon: "tim-icons icon-single-02",
    class: ""
  },
  {
    path: "/payment_processing",
    title: "Payment Processing",
    icon: "tim-icons icon-credit-card",
    class: ""
  },
  {
    path: "/correspondence",
    title: "Correspondence",
    icon: "fa fa-book",
    class: ""
  },
  {
    path: "/administration",
    title: "Administration",
    icon: "fa fa-user",
    class: ""
  },
  {
    path: "/ePay",
    title: "EPay",
    icon: "fa fa-credit-card",
    class: ""
  },
  {
    path: "/disbursement",
    title: "Disbursement",
    icon: "tim-icons icon-money-coins",
    class: ""
  },
  {
    path: "/recovery",
    title: "Recovery",
    icon: "tim-icons icon-money-coins",
    class: ""
  },
  {
    path: "/bankreturns",
    title: "Bank Returns",
    icon: "fa fa-university",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
