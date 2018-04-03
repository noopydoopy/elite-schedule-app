import { EliteApiProvider } from './../../providers/elite-api/elite-api';
import { TeamHomePortPage } from './../team-home-port/team-home-port';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  tournament: any;
  teams: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private elitApi: EliteApiProvider, private lodingCtrl : LoadingController) {
    this.tournament = navParams.data;
  }

  ionViewDidLoad() {
    let loader = this.lodingCtrl.create({
      content :'Getting teams...'
    });
    loader.present().then(() => {
      this.elitApi.getTournamentData(this.tournament.id).subscribe(data => {
        this.teams = data.teams;
        loader.dismiss();
      });
    });

  }

  teamTapped($events, team) {
    // console.log(team);
    this.navCtrl.push(TeamHomePortPage, team);
  }
}
