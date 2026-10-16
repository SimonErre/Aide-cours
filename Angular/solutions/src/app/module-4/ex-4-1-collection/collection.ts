import { Component } from '@angular/core';

import { CarteBrainrot } from './carte-brainrot';

@Component({
  imports: [CarteBrainrot],
  selector: 'app-collection',
  template: `
    <app-carte-brainrot nom="Brr Brr Patapim" [aura]="30" />
    <app-carte-brainrot nom="Chimpanzini Bananini" [aura]="120" rarete="Epique" />
    <app-carte-brainrot nom="Bombardiro Crocodilo" [aura]="500" rarete="Légendaire" />
  `,
})
export class Collection {}
