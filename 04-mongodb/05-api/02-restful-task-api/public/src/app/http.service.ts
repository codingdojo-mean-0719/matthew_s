import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
    this.getPokemon();
  }

  getPokemon() {
    let bulbasaur = this.http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => console.log("Got the PokeMon!!", data));


  }
}
