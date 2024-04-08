import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {WeddingInvitationComponent} from "./wedding-invitation/wedding-invitation.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wedding-invitation', component: WeddingInvitationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
