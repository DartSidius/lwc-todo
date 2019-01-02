import { LightningElement, api, track } from 'lwc';

export default class TaskDetails extends LightningElement {
    @track privateTask;

    @api 
    get task() {
        return this.privateTask;
    } 

    set task(value) {
        this.privateTask = Object.assign({}, value);
        this.setAttribute('task', this.privateTask);
    }

    renderedCallback() {
        
    }

    handleAddStep(event) {
        this.task.details.steps.push({
            Id: this.task.details.steps.length + 1,
            title: event.detail
        });
    }
}