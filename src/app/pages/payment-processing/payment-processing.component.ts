import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SimpleModalService } from 'ngx-simple-modal';
import { TaskComponent } from '../tasks/task.component';
import { TasksModel } from '../../models/task.model';

@Component({
  selector: 'app-payment-processing',
  templateUrl: './payment-processing.component.html',
  styleUrls: ['./payment-processing.component.scss']
})
export class PaymentProcessingComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  showMe: boolean;

  taskIns: TasksModel;

  constructor(private _simpleModal: SimpleModalService) { }

  ngOnInit() {
  }


  clicMe(event) {
    this.blockUI.start('Loading...'); // Start blocking
    event.preventDefault();
    this.showMe = true;

    this.blockUI.stop();

    this._simpleModal.addModal(TaskComponent,
      {
        taskIns: this.taskIns
      }).subscribe(res => {
      });
  }
}
