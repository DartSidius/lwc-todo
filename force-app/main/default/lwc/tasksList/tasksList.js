import { LightningElement, track } from 'lwc';

export default class TasksList extends LightningElement {
    tasks = [
        {
            Id: 1,
            title: "Task1",
            isImportant: true,
            isDone: false, 
            details: {
                steps: '0 of 2',
                deadline: '2020-10-10',
                remind: '2020-10-09',
                notes: 'Qwerty'
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
                steps: '0 of 1',
                deadline: '2020-10-10'
            }
        }
    ];
}