import { LightningElement, track, api } from 'lwc';

export default class CategoriesList extends LightningElement {
    @api categories;

    handleSaveCategory(event) {
        this.categories.push({
            Id: this.categories.length + 1,
            label: event.detail,
            icon: "standard:lead_list"
        });
    }

    selectCategory(event) {
        console.log(event.target.dataset.name);
    }
}