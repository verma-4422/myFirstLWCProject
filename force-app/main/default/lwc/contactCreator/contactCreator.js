import { LightningElement,track } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/CONTACT';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import REVENUE_FIELD from '@salesforce/schema/Contact.Phone';
export default class ContactCreator extends LightningElement {
    objectApiName = CONTACT_OBJECT;
    fields = [NAME_FIELD, REVENUE_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
    
}