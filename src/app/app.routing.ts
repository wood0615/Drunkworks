import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { brewhausComponent } from './views/brewhaus/brewhaus.component';
import { brewhausDetailsComponent } from './views/brewhaus_details/brewhausdetails.component';
import { HelpComponent } from './views/help/help.component';

export const AppRoutes: Routes = [

  {
    path: 'home',
    component: FullComponent,
    children: [
      { path: '', component: brewhausComponent },
      { path: 'help', component: HelpComponent },
      {
        path: 'brewhausdetails/:id',
        component: brewhausDetailsComponent
      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', component: brewhausComponent },
      { path: 'help', component: HelpComponent },
      {
        path: 'brewhausdetails/:id',
        component: brewhausDetailsComponent
      }
    ]
  },
];



