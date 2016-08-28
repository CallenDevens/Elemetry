import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Subscription} from './subscription';

@Component({
	selector:'sub-form',
	templateUrl:'./template/create-sub-form.html'
})
export class SubscriptionFormComponent{

	subscription = new Subscription("","","",0);
	public isDisplay:boolean = false;

	@Output() onUpdated = new EventEmitter();
	@Output() onAddPolicy = new EventEmitter();

	toggle(){
		if(this.isDisplay == false){
			this.isDisplay = true;
		}
		else if(this.isDisplay == true){
			this.isDisplay = false;
		}else{}
	}

}