import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}
  /*
    // synchronous service 
    getHeroes() :Hero[] {
        console.log('from service',HEROES);
        return HEROES;
        
    }
    */
  // async service
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHeroById(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero with id=${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }
}
