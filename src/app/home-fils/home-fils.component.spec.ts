import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFilsComponent } from './home-fils.component';

describe('HomeFilsComponent', () => {
  let component: HomeFilsComponent;
  let fixture: ComponentFixture<HomeFilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
