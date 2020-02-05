import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { PaymentProcessingComponent } from '../../pages/payment-processing/payment-processing.component';
import { CorrespondenceComponent } from '../../pages/correspondence/correspondence.component';
import { AdministrationComponent } from '../../pages/administration/administration.component';
import { EPayComponent } from '../../pages/e-pay/e-pay.component';
import { DisbursementComponent } from '../../pages/disbursement/disbursement.component';
import { RecoveryComponent } from '../../pages/recovery/recovery.component';
import { BankReturnsComponent } from '../../pages/bank-returns/bank-returns.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "payment_processing",
    component: PaymentProcessingComponent
  },
  {
    path: "correspondence",
    component: CorrespondenceComponent
  },
  {
    path: "administration",
    component: AdministrationComponent
  },
  {
    path: "ePay",
    component: EPayComponent
  },
  {
    path: "disbursement",
    component: DisbursementComponent
  },
  {
    path: "recovery",
    component: RecoveryComponent
  },
  {
    path: "bankreturns",
    component: BankReturnsComponent
  }
];
