import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
    selector: 'page-details',
    templateUrl: 'details.html',
})

export class DetailsPage {
    item: any;
    constructor(public navCtrl: NavController, public params: NavParams){
        this.item = params.get('item');
    }
}
