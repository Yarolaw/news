import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { IDataBaseResponse } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  providers: [
      { provide: CarouselConfig, useValue: { noPause: false, showIndicators: true } }
   ],
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent implements OnInit {

  science: any

  defaultImage = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'
  noWrapSlides = false;
  showIndicator = true;

  constructor(public service: NewsService ) { }

  ngOnInit() {
    this.service.getScienceUA().subscribe((data: IDataBaseResponse) => this.science = data)
  }
}
