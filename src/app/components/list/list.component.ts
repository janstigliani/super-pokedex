import { Component, inject } from '@angular/core';
import { PokeService } from '../../services/poke-service';
import { Pokemon } from '../../model/pokemon';
import { PokeCardComponent } from "../poke-card/poke-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [PokeCardComponent, PokeCardComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  pokedex: Pokemon[] = []; 
  pokeService: PokeService = inject(PokeService);

  constructor() {
    this.pokeService.getAllPokemon().then((data: Pokemon[]) =>{
      this.pokedex = data})
  }

}
