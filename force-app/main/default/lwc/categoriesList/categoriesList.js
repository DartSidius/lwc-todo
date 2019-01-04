import { LightningElement, track, api } from 'lwc';

export default class CategoriesList extends LightningElement {
    @api categories;
    isListRendered = false;

    renderedCallback() {
        if(this.isListRendered) {
            return;
        }
        this.isListRendered = true;

        this.selectDefaultCategory();
    }

    selectDefaultCategory() {
        const items = this.template.querySelectorAll("input[type='radio']");
        let index = -1;
        for(let i = 0; i < items.length; i++) {
            if(items[i].dataset.name === "My day") {
                index = i;
            }
        }

        if(index !== -1) {
            this.template.querySelectorAll("input")[index].checked = true;
        }
    }

    handleSaveCategory(event) {
        this.categories.push({
            Id: this.categories.length + 1,
            label: event.detail,
            icon: "standard:lead_list"
        });
    }

    selectCategory(event) {
        let category = this.categories.find(cat => cat.label === event.target.dataset.name);
        if(category) {
            this.dispatchEvent(new CustomEvent("select", {
                detail: category,
                bubbles: true,
                composed: true
            }));
        }
    }
}