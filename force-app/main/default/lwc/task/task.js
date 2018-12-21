import { LightningElement, api, track } from 'lwc';

export default class Task extends LightningElement {
    @api task;
    @track isTaskDone = false;

    markAsImportant() {
        this.task.isImportant = !this.task.isImportant;
    }

    changeTaskStatus(event) {
        this.isTaskDone = event.target.checked;
    }

    get isTaskDetails() {
        return Object.keys(this.task.details).length !== 0;
    }
}