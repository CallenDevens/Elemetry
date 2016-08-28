import { Component,AfterViewInit, ViewChild} from '@angular/core';
import { PolicyGroup} from './policygroup';
import { PolicyFormComponent } from './createpolicy.component';
import { NewPolicyDialogComponent } from './policydialog.component';
import { PolicyGroupService } from './policy-group.service';

@Component({
    selector:'policy-forms',
    templateUrl:'./template/policy-groups.html',
    directives:[
     PolicyFormComponent,
     NewPolicyDialogComponent
     ],

     providers:[PolicyGroupService]
 })
export class PolicyComponent implements AfterViewInit{
	errorMessage: string;
  	groups: PolicyGroup[];
    constructor (private groupService: PolicyGroupService) {}

    @ViewChild(PolicyFormComponent)
	private pfComponent:PolicyFormComponent;

	@ViewChild(NewPolicyDialogComponent)
	private npdComponent:NewPolicyDialogComponent;

	showCreatePolicyDialog(){
		this.npdComponent.showup();
	}

    getGroups() {
    	this.groupService.getGroups()
                     .subscribe(
                       groups => this.groups = groups,
                       error =>  this.errorMessage = <any>error);
    }


	togglePfComponent(event:any){

		this.pfComponent.toggle();
		var target = event.target || event.srcElement || event.currentTarget;
		if(target.innerHTML.indexOf("Cancel")>=0){
		    target.innerHTML = "Create Policy &nbsp; &nbsp;<span class='glyphicon glyphicon-chevron-down'></span>";

		}else{
		    target.innerHTML = "Cancel Creation &nbsp; &nbsp;<span class='glyphicon glyphicon-chevron-up'></span>";

		}
	}

	ngAfterViewInit() {
		this.npdComponent.closeDialog();
		this.getGroups();
  	}

  	/* update policy groups table after server-end data updated*/
  	onUpdated(){
  		this.getGroups();
  	}

}
