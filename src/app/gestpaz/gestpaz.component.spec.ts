import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestpazComponent } from './gestpaz.component';

describe('GestpazComponent', () => {
  let component: GestpazComponent;
  let fixture: ComponentFixture<GestpazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestpazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestpazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
