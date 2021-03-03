import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  @Input() selectedHero: Hero;
  ngOnInit(): void {
    this.getHero();
  }
  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService
      .getHeroById(id)
      .subscribe((hero) => (this.selectedHero = hero));
  }
  goBack(): void {
    this.location.back();
  }
}
