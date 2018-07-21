import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewpagePage } from './../viewpage/viewpage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    Items:any;
    Items2:any=[];
    Items3: any;
Listselect: any="Name";
Listtext: any;
  constructor(public navCtrl: NavController, public https: Http) {
    this.https.get('../../assets/Items.js').map(res => res.json()).subscribe(data =>{
      data.sort((a,b)=>{if(a.Name>b.Name) return 1;
      else if(a.Name<b.Name) return -1;
    else return 0;
  });
      this.Items=data;
      this.Items3=data;
    })
  }
  ViewPage(item){
    this.navCtrl.push(ViewpagePage,item);
  }
  FilterList(){
    if (this.Listselect != undefined) {
        if(this.Listselect=="Name"){
          this.Items2=new Array();
          this.Items3.forEach((item) => {
      if(item.Name.toLowerCase().includes(this.Listtext.toLowerCase())){
        this.Items2.push(item);
      }
    });
  }
      if (this.Listselect == "Company") {
        this.Items2 = new Array();
        this.Items3.forEach((item) => {
          if (item.Company.toLowerCase().includes(this.Listtext.toLowerCase())) {
            this.Items2.push(item);
          }
        });
      }
      this.Items2.sort((a, b) => {
        if (a.Name > b.Name) return 1;
        else if (a.Name < b.Name) return -1;
        else return 0;
      });
    this.Items=this.Items2;
    }
}
}
