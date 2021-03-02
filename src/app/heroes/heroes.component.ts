import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  // Properties
  heroes = HEROES;
  selectedHero?: Hero;
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  // Methods
  handleClick(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }
}
