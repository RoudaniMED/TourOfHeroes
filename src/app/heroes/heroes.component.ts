import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  // Properties
  heroes: Hero[] = [];
  selectedHero?: Hero;
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  ngOnInit(): void {
    this.getHeroes();
  }
  // constructor and service injection
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  // Methods and handlers
  handleClick(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  /* retrieve all heroes from HeroService synchronously
   * getHeroes(): void {
   * this.heroes = this.heroService.getHeroes();
   * }
   */

  // retrieve all heroes from HeroService asynchronously
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
