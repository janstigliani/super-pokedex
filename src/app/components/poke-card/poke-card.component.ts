import { Component, Input } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poke-card',
  imports: [CommonModule],
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.scss'
})
export class PokeCardComponent {
  @Input() pokemon!: Pokemon;
}
