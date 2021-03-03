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
  ngOnInit(): void {
    this.getHeroes();
  }
  // constructor and service injection
  constructor(private heroService: HeroService) {}
  // Methods and handlers
  /* removing the click handler after refactoring the list code*/

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
