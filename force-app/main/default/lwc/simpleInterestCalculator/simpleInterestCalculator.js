import { LightningElement, track } from 'lwc';

export default class SimpleInterestCalculator extends LightningElement {
    @track calculateField
    principle;
    rate;
    time;

    principleChangeHandler(event)
    {
        this.principle=parseInt(event.target.value);
    
  
    }
    rateChangeHandler(event)
    {
        this.rate=parseInt(event.target.value);

    }
    timeChangeHandler(event)
    {
        this.time=parseInt(event.target.value);

    }

    calculateHandler()
    {
        this.calculateField='Simple Inesrets is' +(this.principle*this.rate*this.time)/100;
    
    }
  

    }
    
    
























