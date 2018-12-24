import { LightningElement, track, api } from 'lwc';

export default class CreateForm extends LightningElement {
    @track isCreateFormOpened = false;
    @api btnLabel;
    @api inputLabel;

    get placeholder() {
        return `Enter a ${this.inputLabel}`;
    }

    toggleCreateForm(event) {
        this.isCreateFormOpened = !this.isCreateFormOpened;
    }

    save() {
        let valueToSave = this.template.querySelector(".input-text").value;
        this.dispatchEvent(new CustomEvent("save", {
            detail: valueToSave
        }));
        this.template.querySelector(".input-text").value = "";
    }
}