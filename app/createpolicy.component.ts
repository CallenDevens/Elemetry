import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PolicyGroup} from './policygroup';
import { PolicyGroupService } from './policy-group.service';

@Component({
	selector:'policy-form',
	templateUrl:'./template/create-pol-form.html'
})
export class PolicyFormComponent{

	policygroup = new PolicyGroup("","","");
	public isDisplay:boolean = false;

	@Output() onUpdated = new EventEmitter();
	@Output() onAddPolicy = new EventEmitter();

    constructor (private groupService: PolicyGroupService) {}


	toggle(){
		if(this.isDisplay == false){
			this.isDisplay = true;
		}
		else if(this.isDisplay == true){
			this.isDisplay = false;
		}else{}
	}

	addNewPolicy(){
		this.onAddPolicy.emit();
	}

	onSubmit(name:string,col:string, pol:string){
		if(!name || !col|| !pol){return;}
	    console.log(name+"  " + col+" " +pol);
	    this.policygroup.name = name;
	    this.policygroup.collector = col;
	    this.policygroup.policy = pol;
	    this.groupService.addGroup(name,col,pol);
	    console.log(this.policygroup.name );

	    this.onUpdated.emit();
	    this.toggle();
	}

}