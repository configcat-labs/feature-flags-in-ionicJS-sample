import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import * as configcat from 'configcat-js';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})

export class AddItemPage {
	title: string;
  description: string;
  dueDate: string;
  configCatClient;
  flag;

	constructor(public nav: NavController, public view: ViewController) {
    this.configCatClient = configcat.createClient( "1K3ZCCa1S0GKW6RN4S5wyA/o33xY-5E_U-aEzyeTlme_g", {} );
    this.configCatClient.getValueAsync( "isMyFirstFeatureEnabled", false ).then( value => { 
      this.flag = value;
    });
	}

	saveItem(){
		let newItem = {
		  title: this.title,
      description: this.description,
      dueDate: this.dueDate
		};

		this.view.dismiss(newItem);
	}

	close(){
		this.view.dismiss();
	}
}
