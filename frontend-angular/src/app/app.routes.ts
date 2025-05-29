import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Login } from './features/login/login';
import { Signup } from './features/signup/signup';
import { NotFound } from './features/not-found/not-found';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';

import { Experience } from './features/about/experience/experience';
import { Skill } from './features/about/skill/skill';

import { Mailing } from './features/contact/mailing/mailing';
import { Mapping } from './features/contact/mapping/mapping';
import { Website } from './features/contact/website/website';

export const routes: Routes = [
  { path: '', component: Home, },

  { path: 'login', component: Login },
  { path: 'signup', component: Signup },

  {
    path: 'about', component: About,
    children: [
      { path: '', component: Experience },
      { path: 'experience', component: Experience },
      { path: 'skill', component: Skill },
    ],
  },
  {
    path: 'contact', component: Contact,
    children: [
      { path: '', component: Mailing },
      { path: 'mailing', component: Mailing },
      { path: 'mapping', component: Mapping },
      { path: 'website', component: Website },
    ],
  },

  { path: '**', component: NotFound }
];