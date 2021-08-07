import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import {RouterModule, Routes} from '@angular/router';
import { PageContactComponent } from './page-contact/page-contact.component';
import {AuthService} from "./services/auth.service";

const appRoutes: Routes = [
  { path: '', component:  PageAccueilComponent},
  { path: 'contact', component:  PageContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    HeaderComponent,
    FooterComponent,
    PageAccueilComponent,
    PageContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
