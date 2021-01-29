import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisrilinfComponent } from './visrilinf.component';

describe('VisrilinfComponent', () => {
  let component: VisrilinfComponent;
  let fixture: ComponentFixture<VisrilinfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisrilinfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisrilinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
