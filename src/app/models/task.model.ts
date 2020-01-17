export class TasksModel {
  taskTitle: string;
  description: string;
  taskStatus: string;
  assignedTo: string;
  lastlyUpdatedBy: string;
  isShowAssignedTo: boolean;
  isEditIcon: boolean = true;
  isChecked: boolean = false;
}
