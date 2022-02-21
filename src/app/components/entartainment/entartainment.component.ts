import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { IDataBaseResponse } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-entartainment',
  templateUrl: './entartainment.component.html',
  providers: [
      { provide: CarouselConfig, useValue: { noPause: false, showIndicators: true } }
   ],
  styleUrls: ['./entartainment.component.scss']
})
export class EntartainmentComponent implements OnInit {

  entertainment: any

  noWrapSlides = false;
  showIndicator = true;

  constructor(public service: NewsService ) { }

  ngOnInit() {
    this.service.getEntertainmentUA().subscribe((data: IDataBaseResponse) => this.entertainment = data)
  }
}
