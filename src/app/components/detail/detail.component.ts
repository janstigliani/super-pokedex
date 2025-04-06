import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { PokeService } from '../../services/poke-service';

@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  service: PokeService = inject(PokeService);
  pokemon: Pokemon | null;

  constructor() {
    this.pokemon = this.service.pokemon;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    console.log('Click detected:', event);
    this.pokemon = this.service.pokemon;
  }
}