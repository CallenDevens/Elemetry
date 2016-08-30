import { Component,AfterViewInit, ViewChild} from '@angular/core';
import { ApplicationFormComponent} from './createapplication.component';
@Component({
    selector:'apply-sub',
    templateUrl:'./template/apply-sub-template.html',
    directives:[ApplicationFormComponent],
    providers:[]
 })
export class ApplySubscriptionComponent implements AfterViewInit{
	 
   errorMessage: string;
   constructor () {}

	togglePfComponent(event:any){
		var target = event.target || event.srcElement || event.currentTarget;
		if(target.innerHTML.indexOf("Cancel")>=0){
		    target.innerHTML = "Create Policy &nbsp; &nbsp;<span class='glyphicon glyphicon-chevron-down'></span>";

		}else{
		    target.innerHTML = "Cancel Creation &nbsp; &nbsp;<span class='glyphicon glyphicon-chevron-up'></span>";

		}
	}

	ngAfterViewInit() {
  }

  	/* update policy groups table after server-end data updated*/
  	onUpdated(){
  	}

}
