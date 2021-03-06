import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardListComponent } from '@app/components/organisms/card-list/card-list.component';
import { CharacterDetailComponent } from '@app/components/organisms/character-detail/character-detail.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },
  {
    path: 'main',
    pathMatch: 'full',
    redirectTo: 'main/characters'
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
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
        path: 'characters/:id',
        component: CharacterDetailComponent
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
