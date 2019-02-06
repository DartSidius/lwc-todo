import { LightningElement, track, api } from 'lwc';

export default class TasksList extends LightningElement {
    @api category;

    @track tasks = [
        {
            Id: 1,
            title: "Task1",
            isImportant: true,
            isDone: false, 
            details: {
                stepsCompleted: '0 of 2',
                deadline: '2020-10-10',
                remind: '2020-10-09',
                notes: 'Qwerty',
                steps: [
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
                    }
                ]
            }
        },
        {
            Id: 2,
            title: "Task2",
            isDone: true, 
            isImportant: false,
            details: {}
        },
        {
            Id: 3,
            title: "Task3",
            isDone: false, 
            isImportant: true,
            details: {
                stepsCompleted: '0 of 2',
                deadline: '2020-10-10',
                steps: [
                    {
                        Id: 1, 
                        title: "step1"
                    },
                    {
                        Id: 2, 
                        title: "step2"
                    }
                ]
            }
        }
    ];
    
    get importantTasks() {
        return this.tasks.filter(task => task.isImportant === true);
    }

    get isTodo() {
        return this.category.label === "To do";
    }

    get isTasks() {
        return this.category.label === "Tasks";
    }

    get isMyday() {
        return this.category.label === "My day";
    }

    get isImportant() {
        return this.category.label === "Important";
    }

    get today() {
        return Date.now();
    }

    handleSaveTask(event) {
        this.tasks.push({
                Id: this.tasks.length + 1,
                title: event.detail,
                isDone: false, 
                isImportant: false,
                details: {}
            });
    }
}