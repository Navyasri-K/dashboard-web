import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";

@Component({
  selector: 'add-edit-task',
  templateUrl: './task.component.html'
})
export class TaskComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel {

  selectedStatus(elementId) {

    let newStatus = document.getElementById("newStatus");
    let inProgressStatus = document.getElementById("inProgressStatus");
    let completedStatus = document.getElementById("completedStatus");

    newStatus.style.backgroundImage = "none";
    inProgressStatus.style.backgroundImage = "none";
    completedStatus.style.backgroundImage = "none";

    let ele = document.getElementById(elementId);

    ele.style.backgroundImage = "linear-gradient(298deg, var(--red), var(--yellow))";
  }

  closeCustomModal() {
    this.result = true;
    this.close();
  }
}

export class ConfirmModel {

}
