import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track categories = [
        {
            Id: 1,
            label: "My day",
            icon: "standard:custom_notification",
            tasks: 0
        },
        {
            Id: 2,
            label: "Important",
            icon: "standard:opportunity",
            tasks: 2
        },
        {
            Id: 3,
            label: "To do",
            icon: "standard:proposition",
            tasks: 0
        },
        {
            Id: 4,
            label: "Tasks",
            icon: "standard:task",
            tasks: 0
        }
    ];
    @track task;
    @track selectedCategory = this.categories[0];

    addToImportant(event) {
        let changedCategory = this.categories.find(cat => cat.label === event.detail.category);
        if(changedCategory != null) {
            changedCategory.tasks += event.detail.action === "Add" ? 1 : -1;
        } 
    }

    getSelectedTaskDetails(event) {
        this.task = event.detail;
    }

    handleSelectCategory(event) {
        this.selectedCategory = event.detail;
    }
}