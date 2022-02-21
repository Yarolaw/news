import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NewsService } from 'src/app/services/news.service';

interface IArticle {
  source: {
    id: any
    name: string
  }
  author: string
  title: string
  description: string
  url: string | any
  urlToImage: string | any
  publishedAt: string
  content: string
}
interface IDataBaseResponse  {
  status: string
  totalResults: number
  articles: IArticle[]
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [
      { provide: CarouselConfig, useValue: { noPause: false, showIndicators: true } }
   ],
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  headlines: any
  business: any
  
  
  
  
  

  noWrapSlides = false;
  showIndicator = true;

  constructor(public service: NewsService ) { }

  ngOnInit() {
   this.service.getHeadlinesUA().subscribe((data: any) => {
      this.headlines = data
      console.log('this.headlines', this.headlines);
      
    })
  }
}
