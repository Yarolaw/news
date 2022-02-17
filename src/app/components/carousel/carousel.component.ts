import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CarouselConfig } from 'ngx-bootstrap/carousel';


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
  entertainment: any
  health: any
  science: any
  sports: any
  technology: any

  slides = [
      {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg', text: 'First'},
      {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg',text: 'Second'},
      {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg',text: 'Third'}
   ];

  noWrapSlides = false;
  showIndicator = true;

  constructor(private http: HttpClient) { }

  getHeadlinesUA() {
    this.http.get('https://newsapi.org/v2/top-headlines?country=ua&apiKey=3016b52bb8314bebba05f4fd5f89622d').subscribe((data) => {
      this.headlines = data
      console.log('this.headlines', this.headlines);
      
    })
  }

  getBusinessUA() {
    this.http.get('https://newsapi.org/v2/top-headlines?country=ua&category=business&apiKey=3016b52bb8314bebba05f4fd5f89622d').subscribe((data) => {
      this.business = data
      console.log('this.business', this.business);
      
    })
  }

  getEntertainmentUA() {
    this.http.get('https://newsapi.org/v2/top-headlines?country=ua&category=entertainment&apiKey=3016b52bb8314bebba05f4fd5f89622d').subscribe((data) => {
      this.entertainment = data
      console.log('this.entertainment', this.entertainment);
      
    })
  }

  getHealthUA() {
    this.http.get('https://newsapi.org/v2/top-headlines?country=ua&category=health&apiKey=3016b52bb8314bebba05f4fd5f89622d').subscribe((data) => {
      this.health = data
      console.log('this.health', this.health);
      
    })
  }

   getScienceUA() {
    this.http.get('https://newsapi.org/v2/top-headlines?country=ua&category=science&apiKey=3016b52bb8314bebba05f4fd5f89622d').subscribe((data) => {
      this.science = data
      console.log('this.science', this.science);
      
    })
   }
  
  getSportsUA() {
    this.http.get('https://newsapi.org/v2/top-headlines?country=ua&category=sports&apiKey=3016b52bb8314bebba05f4fd5f89622d').subscribe((data) => {
      this.sports = data
      console.log('this.sports', this.sports);
      
    })
  }

  getTechnologyUA() {
    this.http.get('https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=3016b52bb8314bebba05f4fd5f89622d').subscribe((data) => {
      this.technology = data
      console.log('this.technology', this.technology);
      
    })
  }



  ngOnInit(): void {
  }

}
