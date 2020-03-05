import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SimpleModalService } from 'ngx-simple-modal';
import { TaskComponent } from '../tasks/task.component';

@Component({
  selector: 'app-payment-processing',
  templateUrl: './payment-processing.component.html',
  styleUrls: ['./payment-processing.component.scss']
})
export class PaymentProcessingComponent implements OnInit {

  showMe: boolean;
  @BlockUI() blockUI: NgBlockUI;

  constructor(private _simpleModal: SimpleModalService) { }

  ngOnInit() {
  }


  clicMe(event) {
    this.blockUI.start('Loading...'); // Start blocking
    event.preventDefault();
    this.showMe = true;

    this._simpleModal.addModal(TaskComponent,
      {

      }).subscribe(res => {
      });
  }
}
