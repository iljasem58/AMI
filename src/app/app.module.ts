import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeddingInvitationComponent } from './wedding-invitation/wedding-invitation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisclaimerText} from "./home/disclaimer-text/discalimer-text";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeddingInvitationComponent,
    DisclaimerText
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
