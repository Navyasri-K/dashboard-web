import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-notifications",
  templateUrl: "notifications.component.html"
})
export class NotificationsComponent implements OnInit {
  staticAlertClosed  = false;
  staticAlertClosed1 = false;
  staticAlertClosed2 = false;
  staticAlertClosed3 = false;
  staticAlertClosed4 = false;
  staticAlertClosed5 = false;
  staticAlertClosed6 = false;
  staticAlertClosed7 = false;

  constructor(private toastr: ToastrService) {}

  ngOnInit() {}
}
