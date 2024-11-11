import { Routes } from '@angular/router';

import { HomeComponent } from './pages/general/home/home.component';
import { LoginComponent } from './pages/general/login/login.component';
import { SignupComponent } from './pages/general/signup/signup.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';

import { AboutComponent } from './pages/general/about/about.component';
import { ExperienceComponent } from './pages/general/about/experience/experience.component';
import { SkillComponent } from './pages/general/about/skill/skill.component';

import { ContactComponent } from './pages/general/contact/contact.component';
import { MailingComponent } from './pages/general/contact/mailing/mailing.component';
import { MappingComponent } from './pages/general/contact/mapping/mapping.component';
import { WebsiteComponent } from './pages/general/contact/website/website.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  {
    path: 'about', component: AboutComponent,
    children: [
      { path: '', component: ExperienceComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'skill', component: SkillComponent },
    ],
  },
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