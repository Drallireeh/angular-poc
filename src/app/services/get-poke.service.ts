import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPokeService {
  private url = 'https://pokeapi.co/api/v2/pokemon-species';
  private urlAll = 'https://pokeapi.co/api/v2/pokemon-species?limit=';
   
  constructor(private httpClient: HttpClient) { }
  
  getAllPokemon(number: number){
    let newUrl = this.urlAll;
    newUrl += `${number}`;
    return this.httpClient.get(newUrl);
  }

  getOnePokemon(number: number){
    let urlOne = this.url;
    urlOne += `/${number}`;
    return this.httpClient.get(urlOne);
  }
  
}