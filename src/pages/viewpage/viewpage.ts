import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewpage',
  templateUrl: 'viewpage.html',
})
export class ViewpagePage {
itemActive: any;
  itemImage: any;
  itemName: any;
  itemProp: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.itemActive=this.navParams.get("active")
    this.itemImage=this.navParams.get("image")
    this.itemName = this.navParams.get("name")
    this.itemProp = this.navParams.get("prop")
  }


}
