import { LightningElement,wire, track,api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import phone_FIELD from '@salesforce/schema/Contact.Phone';
import Title_FIELD from '@salesforce/schema/Contact.Title';
import getContact  from '@salesforce/apex/getContact.getContact';
const columns = [
    { label: 'First Name', fieldName: 'Name' },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' }
    
];        

export default class DisplayContact extends LightningElement {
    columns = columns;
    data=[];

    @wire(getContact)
    WiredConatct(result)
    {
        if(result.data)
        {
            this.data =result.data;
        }
        if( result.error)
        {
            console.log('error',result.error);
        }

    }

  



}