import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsrutlComponent } from './isrutl.component';

describe('IsrutlComponent', () => {
  let component: IsrutlComponent;
  let fixture: ComponentFixture<IsrutlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsrutlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsrutlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
