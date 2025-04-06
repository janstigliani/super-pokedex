import { Component, inject, Input } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { CommonModule } from '@angular/common';
import { PokeService } from '../../services/poke-service';

@Component({
  selector: 'app-poke-card',
  imports: [CommonModule],
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.scss'
})
export class PokeCardComponent {
  @Input() pokemon!: Pokemon;
  service: PokeService = inject(PokeService);

  selectPokemon() {
    this.service.selectPoke(this.pokemon);
    
  }
}
