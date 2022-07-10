import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from '@app/components/organisms/card-list/card-list.component';
import { CharacterDetailComponent } from '@app/components/organisms/character-detail/character-detail.component';
import { CharactersComponent } from '@app/components/organisms/characters/characters.component';
import { EpisodesComponent } from '@app/components/organisms/episodes/episodes.component';
import { LocationsComponent } from '@app/components/organisms/locations/locations.component';
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
      // {
      //   path: 'characters',
      //   component: CharactersComponent
      // },
      // {
      //   path: 'characters/:id',
      //   component: CharacterDetailComponent
      // },
      // {
      //   path: 'locations',
      //   component: LocationsComponent
      // },
      // {
      //   path: 'episodes',
      //   component: EpisodesComponent
      // }
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
