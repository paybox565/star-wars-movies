import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwmoviesComponent } from './swmovies.component';

describe('SwmoviesComponent', () => {
  let component: SwmoviesComponent;
  let fixture: ComponentFixture<SwmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwmoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
