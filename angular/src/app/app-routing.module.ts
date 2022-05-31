import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

import { AboutComponent } from './modules/general/about/about.component';
import { LoginComponent } from './modules/general/login/login.component';
import { SignupComponent } from './modules/general/signup/signup.component';

import { ContactComponent } from './modules/general/contact/contact.component';
import { MailingComponent } from './modules/general/contact/mailing/mailing.component';
import { MappingComponent } from './modules/general/contact/mapping/mapping.component';
import { WebsiteComponent } from './modules/general/contact/website/website.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },

  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  {
    path: 'contact', component: ContactComponent,
    children: [
      { path: '', component: MailingComponent },
      { path: 'mailing', component: MailingComponent },
      { path: 'mapping', component: MappingComponent },
      { path: 'website', component: WebsiteComponent },
    ],
  },

  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }