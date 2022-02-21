import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntartainmentComponent } from './entartainment.component';

describe('EntartainmentComponent', () => {
  let component: EntartainmentComponent;
  let fixture: ComponentFixture<EntartainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntartainmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntartainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
