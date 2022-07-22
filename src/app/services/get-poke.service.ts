import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPokeService {
  private url = 'https://pokeapi.co/api/v2/pokemon-species';
  private urlAll = 'https://pokeapi.co/api/v2/pokemon-species?limit=31';
   
  constructor(private httpClient: HttpClient) { }
  
  getAllPokemon(){
    return this.httpClient.get(this.urlAll);
  }

  getOnePokemon(number: number){
    let urlOne = this.url;
    urlOne += `/${number}`;
    console.log(urlOne)
    return this.httpClient.get(urlOne);
  }
  
}