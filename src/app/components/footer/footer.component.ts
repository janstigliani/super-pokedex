import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PokeService } from '../../services/poke-service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  service:PokeService = inject(PokeService)

  nextPage() {
    this.service.nextPage();
    
  }

  prevPage() {
    this.service.previousPage();
    
  }
}
