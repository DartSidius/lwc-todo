import { LightningElement, track } from 'lwc';

export default class CategoriesList extends LightningElement {
    categories = [
        {
            Id: 1,
            label: "My day",
            icon: "standard:custom_notification"
        },
        {
            Id: 2,
            label: "Important",
            icon: "standard:opportunity"
        },
        {
            Id: 3,
            label: "To do",
            icon: "standard:proposition"
        },
        {
            Id: 4,
            label: "Tasks",
            icon: "standard:task"
        }
    ];
    @track isCreateFormOpened = false;

    showCreateForm(event) {
        this.isCreateFormOpened = !this.isCreateFormOpened;
    }
}