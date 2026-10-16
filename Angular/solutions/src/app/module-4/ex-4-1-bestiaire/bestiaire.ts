import { Component } from '@angular/core';

import { CarteMonstre } from './carte-monstre';

@Component({
  imports: [CarteMonstre],
  selector: 'app-bestiaire',
  template: `
    <app-carte-monstre nom="Gobelin" [pv]="30" />
    <app-carte-monstre nom="Troll" [pv]="120" rang="Elite" />
    <app-carte-monstre nom="Dragon" [pv]="500" rang="Boss" />
  `,
})
export class Bestiaire {}
