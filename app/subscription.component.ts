import { Component,AfterViewInit, ViewChild} from '@angular/core';
import { Subscription } from './subscription';
import { SubscriptionFormComponent } from './createsubscription.component';
import { NewSensorDialogComponent } from './sensordialog.component';

@Component({
    selector:'subscription',
    templateUrl:'./template/subscription-template.html',
    directives:[SubscriptionFormComponent,NewSensorDialogComponent],
    providers:[]
 })
export class SubscriptionComponent implements AfterViewInit{
  	errorMessage: string;
  	subscriptions: Subscription[];

    @ViewChild(SubscriptionFormComponent)
    private sfComponent:SubscriptionFormComponent;


    @ViewChild(NewSensorDialogComponent)
    private nsdComponent:NewSensorDialogComponent;


  	showCreateSensorDialog(){
        this.nsdComponent.showup();
	  }

    getSubscriptions() {
      this.subscriptions = [new Subscription("sub1","group1","sensor1", 5),new Subscription("sub2","group2","sensor2", 15)]
    }


  	toggleSfComponent(event:any){
        this.sfComponent.toggle();

        var target = event.target || event.srcElement || event.currentTarget;
        if(target.innerHTML.indexOf("Cancel")>=0){
          target.innerHTML = "Create Subscription &nbsp; &nbsp;<span class='glyphicon glyphicon-chevron-down'></span>";

        }else{
          target.innerHTML = "Cancel Creation &nbsp; &nbsp;<span class='glyphicon glyphicon-chevron-up'></span>";

      }
	}

	ngAfterViewInit() {
      this.nsdComponent.closeDialog();
		  this.getSubscriptions();
  }

  	/* update policy groups table after server-end data updated*/
  	onUpdated(){
  		this.getSubscriptions();
  	}

}
