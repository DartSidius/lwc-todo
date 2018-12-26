import { LightningElement, api, track } from 'lwc';

export default class Task extends LightningElement {
    @api task;
    @track isTaskDone = false;
    @track isImportant;

    connectedCallback() {
        this.isImportant = this.task.isImportant;
    }

    markAsImportant() {
        this.isImportant = !this.isImportant;
        const actionType = this.isImportant ? "Add" : "Remove";

        this.dispatchEvent(new CustomEvent("importantmark", {
            detail: {
                category: "Important",
                action: actionType
            },
            bubbles: true,
            composed: true
        }));
    }

    selectTask() {
        this.dispatchEvent(new CustomEvent("taskselect", {
            detail: this.task,
            bubbles: true,
            composed: true
        }));
    }

    changeTaskStatus(event) {
        this.isTaskDone = event.target.checked;
    }

    get isTaskDetails() {
        return Object.keys(this.task.details).length !== 0;
    }
}