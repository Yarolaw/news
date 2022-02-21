import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { IDataBaseResponse } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  providers: [
      { provide: CarouselConfig, useValue: { noPause: false, showIndicators: true } }
   ],
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  technology: any

  defaultImage = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'
  noWrapSlides = false;
  showIndicator = true;

  constructor(public service: NewsService ) { }

  ngOnInit() {
    this.service.getScienceUA().subscribe((data: IDataBaseResponse) => this.technology = data)
  }

}
