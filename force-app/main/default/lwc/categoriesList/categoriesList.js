import { LightningElement, track } from 'lwc';

export default class CategoriesList extends LightningElement {
    @track categories = [
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

    handleSaveCategory(event) {
        this.categories.push({
            Id: this.categories.length + 1,
            label: event.detail,
            icon: "standard:lead_list"
        });
    }
}