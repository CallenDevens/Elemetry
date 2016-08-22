import {Routes, RouterModule } from '@angular/router';
import { PolicyComponent}  from './policy.component';
import {MainTabComponent} from './maintab.component';


const appRoutes: Routes = [
	{
		path:'policy', 
		component: PolicyComponent
	},
	{
		path:'',
		component:MainTabComponent
	}
];

export const appRoutingProviders:any=[];
export const routing =RouterModule.forRoot(appRoutes);