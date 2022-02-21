import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { IDataBaseResponse } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  providers: [
      { provide: CarouselConfig, useValue: { noPause: false, showIndicators: true } }
   ],
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {

  sports: any

  defaultImage = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'
  noWrapSlides = false;
  showIndicator = true;

  constructor(public service: NewsService ) { }

  ngOnInit() {
    this.service.getSportsUA().subscribe((data: IDataBaseResponse) => this.sports = data)
  }
}
