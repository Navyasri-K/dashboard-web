import { Component, OnInit } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "black-dashboard-angular";
  ipAddress: string;

  constructor(private _translate: TranslateService,
    private http: HttpClient) {

  }

  ngOnInit() {
    this._translate.setDefaultLang('com.messages');
    this.getIPAddress();
  }

  getIPAddress() {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res: any) => {
      this.ipAddress = res.ip;
      console.log(this.ipAddress);
    });
  }
}
