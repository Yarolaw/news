import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { IDataBaseResponse } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  providers: [
      { provide: CarouselConfig, useValue: { noPause: false, showIndicators: true } }
   ],
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  business: any

  noWrapSlides = false;
  showIndicator = true;

  constructor(public service: NewsService ) { }

  ngOnInit() {
    this.service.getBusinessUA().subscribe((data: IDataBaseResponse) => this.business = data)
  }
}
