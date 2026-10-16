import { Component, signal } from '@angular/core';

type Team = 'tralalero' | 'bombardiro' | 'tung';

@Component({
  selector: 'app-choix-team',
  template: `
    <button (click)="team.set('tralalero')">Tralalero</button>
    <button (click)="team.set('bombardiro')">Bombardiro</button>
    <button (click)="team.set('tung')">Tung Tung</button>

    @switch (team()) {
      @case ('tralalero') {
        <p>🦈 Requin en baskets, il sprinte sur la plage.</p>
      }
      @case ('bombardiro') {
        <p>🐊 Mi-crocodile, mi-bombardier, il survole tout.</p>
      }
      @case ('tung') {
        <p>🪵 Bâton en bois, il te réveille pour le sahur.</p>
      }
      @default {
        <p>Choisis ta team, chef.</p>
      }
    }
  `,
})
export class ChoixTeam {
  protected readonly team = signal<Team | null>(null);
}
