import { LightningElement, track } from 'lwc';

export default class TaskDetails extends LightningElement {
    steps = [
        {
            Id: 1, 
            title: "step1"
        },
        {
            Id: 2, 
            title: "step2"
        },
        {
            Id: 3, 
            title: "step3"
        },
    ];
    @track isCreateFormOpened = false;

    showCreateForm(event) {
        this.isCreateFormOpened = !this.isCreateFormOpened;
    }
}