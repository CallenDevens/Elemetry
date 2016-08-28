import {Component,ElementRef, Renderer} from '@angular/core';

@Component({
    selector:'add-policy-dialog',
    templateUrl:'./template/new-policy-dialog-template.html',
 })
export class NewPolicyDialogComponent{
	  private el: HTMLElement;

	  constructor(elementRef: ElementRef) {
	  	this.el = elementRef.nativeElement;
	  }
	  
	  showup(){
	  	this.el.style.display ="block";

	  }
	  closeDialog(){
		this.el.style.display = "none";
	  }

	  onSubmit(){
	  	this.closeDialog();
	  }
}
