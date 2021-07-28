import {
    LightningElement,
    api,
    wire,
    track
} from 'lwc';

import getAccList from '@salesforce/apex/GetAccList.fetchAccounts';
SearchByAccountName
import SearchByAccountName from '@salesforce/apex/GetAccList.SearchByAccountName';


export default class FinancialServicesAccountListing_LWC extends LightningElement {
    Accounts =[];
    @track AccountNameFilter;
    @track columns = [{
        label: 'Account Name',
        fieldName: 'AccountName', //CSTI_SAP_Order_Number__c
        type: 'url',
        typeAttributes: {
            label: {
                fieldName: 'Name'
            },
            target: '_self'
        },
        sortable: true,
        //initialWidth: 153
    },
    {
        label: 'Account Owner',
        fieldName: 'OwnerId.Name',
        type: 'text',
        sortable: true,
        //initialWidth: 89,
        wrapText:true
        
    },
    {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'Phone',
        sortable: true,
        //initialWidth: 109,
        wrapText:true
    },
    {
        label: 'Website',
        fieldName: 'Website',
        type: 'URL',
        sortable: true,
        //initialWidth: 109
    },
    {
        label: 'Annual Revenue',
        fieldName: 'Annual Revenue',
        type: 'Currency',
        sortable: true,
        //initialWidth: 80,
        wrapText:true
    }
    
]

@wire(getAccList, {}) 
getAcc({ error, data }) {
    if (error) {
       this.error = error ; 
    } else if (data) {
        this.Accounts = data;
    }
}

assignAccountName(event) {
    console.log('PoNumberVar:' + event.target.value);
    this.AccountNameFilter = event.target.value;
}

SearchByAccountName(){
    SearchByAccountName({Name : this.AccountNameFilter})
        .then(result =>{
            this.Accounts = result;
                       
        })
        .catch(error =>{
            console.log(error);
            
        })

    
}

}
