import { TeamDetailPage } from './../team-detail/team-detail';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StandingsPage } from '../standings/standings';

/**
 * Generated class for the TeamHomePortPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-home-port',
  templateUrl: 'team-home-port.html',
})
export class TeamHomePortPage {
  public teamDetailTab = TeamDetailPage;
  public standingsTab = StandingsPage;
  public team: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePortPage');
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

}
