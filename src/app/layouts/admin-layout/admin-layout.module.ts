import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TextMaskModule } from 'angular2-text-mask';

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CorrespondenceComponent } from '../../pages/correspondence/correspondence.component';
import { BankReturnsComponent } from '../../pages/bank-returns/bank-returns.component';
import { DisbursementComponent } from '../../pages/disbursement/disbursement.component';
import { AdministrationComponent } from '../../pages/administration/administration.component';
import { EPayComponent } from '../../pages/e-pay/e-pay.component';
import { PaymentProcessingComponent } from '../../pages/payment-processing/payment-processing.component';
import { RecoveryComponent } from '../../pages/recovery/recovery.component';
import { PubSubModule } from '../../pub-sub/pub_sub.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    PubSubModule,
    HttpClientModule,
    NgbModule,
    TextMaskModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    BankReturnsComponent,
    CorrespondenceComponent,
    DisbursementComponent,
    AdministrationComponent,
    EPayComponent,
    PaymentProcessingComponent,
    RecoveryComponent
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
