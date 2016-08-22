import {Component} from '@angular/core';
import {PolicyFormComponent } from './form.component';

@Component({
    selector:'policy-forms',
    templateUrl:'./template/create-policy-template.html',
    directives: [PolicyFormComponent]
})
export class PolicyComponent{
	isGroupDialogDisplay:boolean = false;
	isSensorDialogDisplay:boolean = false;

	showAddGroupDialog(){
		this.isGroupDialogDisplay = true;
	}


	closeGroupDialog(){
		this.isGroupDialogDisplay = false;	
	}

	showAddSensorDialog(){
		this.isSensorDialogDisplay = true;
	}


	closeSensorDialog(){
		this.isSensorDialogDisplay = false;	
	}
}
