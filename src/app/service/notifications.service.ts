import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { String } from 'typescript-string-operations';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private toastr: ToastrService) { }

  showNotification(from, align, key, message) {

    switch (key) {
      case 1:
        this.toastr.info(String.Format('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> {0}.', message), '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-info alert-with-icon",
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 2:
        this.toastr.success(String.Format('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> {0}.', message), '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 3:
        this.toastr.warning(String.Format('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> {0}.', message), '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-warning alert-with-icon",
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 4:
        this.toastr.error(String.Format('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> {0}.', message), '', {
          disableTimeOut: true,
          enableHtml: true,
          closeButton: true,
          toastClass: "alert alert-danger alert-with-icon",
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 5:
        this.toastr.show(String.Format('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> {0}.', message), '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-primary alert-with-icon",
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      default:
        break;
    }
  }
}
