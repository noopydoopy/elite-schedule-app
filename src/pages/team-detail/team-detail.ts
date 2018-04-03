import { EliteApiProvider } from './../../providers/elite-api/elite-api';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeamDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {
  public team: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private elitApi: EliteApiProvider) {
    this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    let selectedTournamentId = this.navParams.data;
    this.elitApi.getTournamentData(selectedTournamentId).subscribe(data =>{
      this.team = data;
    });
  }

}
