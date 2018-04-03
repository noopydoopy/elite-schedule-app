import { TeamHomePortPage } from './../pages/team-home-port/team-home-port';
import { StandingsPage } from './../pages/standings/standings';
import { GamePage } from './../pages/game/game';
import { TournamentsPage } from './../pages/tournaments/tournaments';
import { MyTeamsPage } from './../pages/my-teams/my-teams';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EliteApiProvider } from '../providers/elite-api/elite-api';
import { HttpModule } from '@angular/http';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TeamsPage } from '../pages/teams/teams';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamDetailPage,
    TeamsPage,
    GamePage,
    StandingsPage,
    TeamHomePortPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamDetailPage,
    TeamsPage,
    GamePage,
    StandingsPage, 
    TeamHomePortPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApiProvider
  ]
})
export class AppModule {}
