import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// components for views and layouts
import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardPageVisitsComponent } from "./components/cards/card-page-visits/card-page-visits.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";
import { CardSettingsComponent } from "./components/cards/card-settings/card-settings.component";
import { CardSocialTrafficComponent } from "./components/cards/card-social-traffic/card-social-traffic.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { MapExampleComponent } from "./components/maps/map-example/map-example.component";
import { IndexDropdownComponent } from "./components/dropdowns/index-dropdown/index-dropdown.component";
import { TableDropdownComponent } from "./components/dropdowns/table-dropdown/table-dropdown.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { NotificationDropdownComponent } from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ResultTemplatesComponent } from './views/admin/result-templates/result-templates.component';
import { CardResultTemplatesTableComponent } from "./components/cards/card-result-templates-table/card-result-templates-table.component";
import { ResultTemplatesTableActionBarComponent } from './components/action-bars/result-templates-table-action-bar/result-templates-table-action-bar.component';
import { CardResultCreateComponent } from './components/cards/card-result-create/card-result-create.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AuthInterceptor } from './auth/auth.interceptor';
import { OAuthModule } from 'angular-oauth2-oidc';
import { MonitorsComponent } from './views/monitors/monitors.component';
import { ResultsComponent } from './views/admin/results/results.component';
import { CardResultTableComponent } from './components/cards/card-result-table/card-result-table.component';
import { ResultTableActionBarComponent } from './components/action-bars/result-table-action-bar/result-table-action-bar.component';
import { ResultActionBarComponent } from './components/action-bars/result-action-bar/result-action-bar.component';
import { CardTeamTableComponent } from './components/cards/card-team-table/card-team-table.component';
import { TeamsComponent } from './views/admin/teams/teams.component';
import { CardTeamCreateComponent } from './components/cards/card-team-create/card-team-create.component';
import { TeamActionBarComponent } from './components/action-bars/team-action-bar/team-action-bar.component';
import { CardResultTableMonitorsComponent } from './components/cards/card-result-table-monitors/card-result-table-monitors.component';
import { RaceComponent } from './views/race/race.component';
import { CardResultTableRaceComponent } from './components/cards/card-result-table-race/card-result-table-race.component';
import { CardRaceLandingTableComponent } from './components/cards/card-race-landing-table/card-race-landing-table.component';
import { LoginComponent } from './views/login/login.component';
import { CardSimpleResultsTableMonitorsComponent } from './card-simple-results-table-monitors/card-simple-results-table-monitors.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    MapExampleComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LandingComponent,
    ResultTemplatesComponent,
    CardResultTemplatesTableComponent,
    ResultTemplatesTableActionBarComponent,
    CardResultCreateComponent,
    MonitorsComponent,
    ResultsComponent,
    CardResultTableComponent,
    ResultTableActionBarComponent,
    ResultActionBarComponent,
    CardTeamTableComponent,
    TeamsComponent,
    TeamActionBarComponent,
    CardTeamCreateComponent,
    CardResultTableMonitorsComponent,
    RaceComponent,
    CardResultTableRaceComponent,
    CardRaceLandingTableComponent,
    LoginComponent,
    CardSimpleResultsTableMonitorsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, OAuthModule.forRoot()],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
