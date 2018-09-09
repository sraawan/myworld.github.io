import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCoreComponent } from './country-core.component';

describe('CountryCoreComponent', () => {
  let component: CountryCoreComponent;
  let fixture: ComponentFixture<CountryCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
