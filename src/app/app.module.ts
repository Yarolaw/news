import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { Routes, RouterModule }  from '@angular/router'
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NewsService } from './services/news.service';
import { BusinessComponent } from './components/business/business.component';
import { EntartainmentComponent } from './components/entartainment/entartainment.component';
import { HealthComponent } from './components/health/health.component';
import { ScienceComponent } from './components/science/science.component';
import { SportComponent } from './components/sport/sport.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'entartainment', component: EntartainmentComponent },
  { path: 'health', component: HealthComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'sport', component: SportComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: '**', component: NotfoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    BusinessComponent,
    EntartainmentComponent,
    HealthComponent,
    ScienceComponent,
    SportComponent,
    TechnologyComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
