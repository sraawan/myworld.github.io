import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionCoreComponent } from './region-core.component';

describe('RegionCoreComponent', () => {
  let component: RegionCoreComponent;
  let fixture: ComponentFixture<RegionCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
