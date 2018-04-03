import { EliteApiProvider } from './../../providers/elite-api/elite-api';
import { TeamsPage } from './../teams/teams';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {
  tourments: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApiProvider, private loadingCtrl : LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
    let loader = this.loadingCtrl.create({
      content: 'Getting tournaments...'
    });
    loader.present().then(() => {
      this.eliteApi.getTourments().subscribe(data => {
        this.tourments = data;
        loader.dismiss();
      })
    });
   
  }

  itemTapped($event, item) {
    console.log(item);
    this.navCtrl.push(TeamsPage, item);
  }

}
