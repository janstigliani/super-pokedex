import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  static BASE_URL = `https://pokeapi.co/api/v2/`
  static POKEMON_URL = `pokemon/`
  limit: number
  offset: number
  pokemon: Pokemon | null

  constructor() {
    this.limit = 1302;
    this.offset = 0;
    this.pokemon = null;
  }

  getAllPokemon(): Promise<Pokemon[]> {
    const url = PokeService.BASE_URL + PokeService.POKEMON_URL + `?limit=` + this.limit + `&offset=` + this.offset;
    const pokePromise = fetch(url).then(prom => prom.json())
      .then(jsonData => {
        const requests= [];

        for (const pokemon of jsonData.results) {

          const pokeUrl = pokemon.url

          const request = fetch(pokeUrl)
            .then(res => res.json())
            .then(data => this.fromRawDatatoPokemon(data) ?? [])

          requests.push(request);
        }
        return Promise.all(requests)
      })
      
    return pokePromise;
  }

  fromRawDatatoPokemon(rawPokemon: any){
    const typeArray = []
    for (const rawTypeArray of rawPokemon.types) {
      const type = rawTypeArray.type.name;
      typeArray.push(type);
    };

    const newPokemon: Pokemon = {
      id: rawPokemon.id,
      name: rawPokemon.name,
      height: rawPokemon.height,
      weight: rawPokemon.weight,
      sprites: rawPokemon.sprites.front_default,
      types: typeArray
    }

    return newPokemon;
  }

  nextPage() {
    if (this.offset > 1301 - this.limit) {
      this.offset = 0;
    } else {
      this.offset += this.limit;
    }
  }

  previousPage() {
    if (this.offset > 0) {
      this.offset -= this.limit;
    } else {
      this.offset = 1302 - this.limit;
    }
  }

  selectPoke(pokemon:Pokemon){
    this.pokemon = pokemon;
    return this.pokemon;
  }
}
