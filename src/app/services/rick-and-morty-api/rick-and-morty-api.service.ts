import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { QueryParams } from '@app/models/query/QueryParams';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyApiService {
  rickAndMortyApi = environment.rickAndMortyApi;

  constructor(private httpClient: HttpClient) {}

  getAllCharacters(query: QueryParams) {
    
    const url = `${this.rickAndMortyApi.base}${this.rickAndMortyApi.paths.character}`;
    let params = new HttpParams().appendAll(query);

    return this.httpClient.get(url, { params });
  }

  getOneCharacterById(id: number) {
    const url = `${this.rickAndMortyApi.base}${this.rickAndMortyApi.paths.character}`;
    let params = new HttpParams().appendAll({ id });

    return this.httpClient.get(url, { params });
  }

  getAllLocations(query: QueryParams) {
    const url = `${this.rickAndMortyApi.base}${this.rickAndMortyApi.paths.location}`;
    let params = new HttpParams().appendAll(query);

    return this.httpClient.get(url, { params });
  }

  getAllEpisodes(query: QueryParams) {
    const url = `${this.rickAndMortyApi.base}${this.rickAndMortyApi.paths.episode}`;
    let params = new HttpParams().appendAll(query);

    return this.httpClient.get(url, { params });
  }
}
