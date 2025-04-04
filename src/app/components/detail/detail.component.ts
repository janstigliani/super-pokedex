import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pokemon } from '../../model/pokemon';

@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  @Input() pokemon!: Pokemon;
}

//trasformare ogni poke-card in button, al click attivano getPokemonById e settano la variabile di classe this.pokemon nel service
//details prende il service, recupera this.pokemon e ne displaya le info.