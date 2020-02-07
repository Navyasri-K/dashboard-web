import { Component, OnInit } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "black-dashboard-angular";

  constructor(private _translate: TranslateService) {

  }

  ngOnInit() {
    this._translate.setDefaultLang('com.messages');
  }
}
