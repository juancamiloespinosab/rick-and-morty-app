import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardListComponent } from '@app/components/organisms/card-list/card-list.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main/characters'
  },
  {
    path: 'main',
    pathMatch: 'full',
    redirectTo: 'main/characters'
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'characters',
        component: CardListComponent
      },
      {
        path: 'locations',
        component: CardListComponent
      },
      {
        path: 'episodes',
        component: CardListComponent
      }
    ]
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
