import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-nom-du-heros',
  template: `
    <p>Nom : {{ nom() }} | Cri de guerre : {{ nomEnMajuscules() }} !</p>
    <button (click)="renommer()">Renommer</button>
  `,
})
export class NomDuHeros {
  protected readonly nom = signal('Morgan');
  protected readonly nomEnMajuscules = computed(() => this.nom().toUpperCase());

  protected renommer() {
    this.nom.set('Jaime');
  }
}
