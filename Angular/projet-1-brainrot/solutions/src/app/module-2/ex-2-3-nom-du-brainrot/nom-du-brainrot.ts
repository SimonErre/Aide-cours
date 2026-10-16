import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-nom-du-brainrot',
  template: `
    <p>Nom : {{ nom() }} | Cri : {{ cri() }} !!!</p>
    <button (click)="renommer()">Renommer</button>
  `,
})
export class NomDuBrainrot {
  protected readonly nom = signal('Tralalero Tralala');
  protected readonly cri = computed(() => this.nom().toUpperCase());

  protected renommer() {
    this.nom.set('Bombardiro Crocodilo');
  }
}
