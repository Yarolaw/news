import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getHeadlinesUA() {
    return this.http.get<any>('https://newsapi.org/v2/top-headlines?country=ua&apiKey=3016b52bb8314bebba05f4fd5f89622d');
  }

  getBusinessUA() {
    return this.http.get<any>('https://newsapi.org/v2/top-headlines?country=ua&category=business&apiKey=3016b52bb8314bebba05f4fd5f89622d')
  }

  getEntertainmentUA() {
   return this.http.get<any>('https://newsapi.org/v2/top-headlines?country=ua&category=entertainment&apiKey=3016b52bb8314bebba05f4fd5f89622d')
  }
  
  getHealthUA() {
   return this.http.get<any>('https://newsapi.org/v2/top-headlines?country=ua&category=health&apiKey=3016b52bb8314bebba05f4fd5f89622d')
  }

  getScienceUA() {
    return this.http.get<any>('https://newsapi.org/v2/top-headlines?country=ua&category=science&apiKey=3016b52bb8314bebba05f4fd5f89622d')  
  }
  
  getSportsUA() {
    return this.http.get<any>('https://newsapi.org/v2/top-headlines?country=ua&category=sports&apiKey=3016b52bb8314bebba05f4fd5f89622d')
  }

  getTechnologyUA() {
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=3016b52bb8314bebba05f4fd5f89622d')
  }
}
