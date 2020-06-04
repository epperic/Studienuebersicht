import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouteGuard } from './shared/RouteGuard';
import { AuthentificationService } from './shared/AuthentificationService';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModullistComponent } from './modullist/modullist.component';
import { ModulEditComponent } from './modul-edit/modul-edit.component';
import { ModulService } from './shared/ModulService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GradesComponent } from './grades/grades.component';
import { ModulAgainComponent } from './modul-again/modul-again.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const appRoutes:Routes =[
  { path: 'home', component: HomeComponent, canActivate: [RouteGuard]},
  { path: 'semester/1', component: ModullistComponent, canActivate: [RouteGuard]},
  { path: 'semester/2', component: ModullistComponent, canActivate: [RouteGuard]},
  { path: 'semester/3', component: ModullistComponent, canActivate: [RouteGuard]},
  { path: 'semester/4', component: ModullistComponent, canActivate: [RouteGuard]},
  { path: 'semester/5', component: ModullistComponent, canActivate: [RouteGuard]},
  { path: 'semester/6', component: ModullistComponent, canActivate: [RouteGuard]},
  { path: 'semester/7', component: ModullistComponent, canActivate: [RouteGuard]},
  { path: 'modul/:id', component: ModulEditComponent, canActivate: [RouteGuard]},
  { path: 'grades', component: GradesComponent, canActivate: [RouteGuard]},
  { path: 'do_modul_again', component: ModulAgainComponent, canActivate: [RouteGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
]

var firebaseConfig = {
  apiKey: "AIzaSyDY0CfSpmYWZ5-r8KeCduX34efIL6EVpIs",
  authDomain: "studienuebersicht.firebaseapp.com",
  databaseURL: "https://studienuebersicht.firebaseio.com",
  projectId: "studienuebersicht",
  storageBucket: "studienuebersicht.appspot.com",
  messagingSenderId: "936765160627",
  appId: "1:936765160627:web:528543f33c1654d949c4c6"
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginComponent,
    LogoutComponent,
    PageNotFoundComponent,
    ModullistComponent,
    ModulEditComponent,
    GradesComponent,
    ModulAgainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [RouteGuard, AuthentificationService, ModulService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
