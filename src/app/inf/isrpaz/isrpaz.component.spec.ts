import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsrpazComponent } from './isrpaz.component';

describe('IsrpazComponent', () => {
  let component: IsrpazComponent;
  let fixture: ComponentFixture<IsrpazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsrpazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsrpazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
