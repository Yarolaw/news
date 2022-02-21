import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { IDataBaseResponse } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  providers: [
      { provide: CarouselConfig, useValue: { noPause: false, showIndicators: true } }
   ],
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  health: any

  noWrapSlides = false;
  showIndicator = true;

  constructor(public service: NewsService ) { }

  ngOnInit() {
    this.service.getHealthUA().subscribe((data: IDataBaseResponse) => this.health = data)
  }
}
