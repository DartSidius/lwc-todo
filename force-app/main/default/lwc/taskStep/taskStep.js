import { LightningElement, api, track } from 'lwc';

export default class TaskStep extends LightningElement {
    @api step;
    @track isStepDone = false;

    changeStepStatus(event) {
        this.isStepDone = event.target.checked;
    }
}