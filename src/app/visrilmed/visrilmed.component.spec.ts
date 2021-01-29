import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisrilmedComponent } from './visrilmed.component';

describe('VisrilmedComponent', () => {
  let component: VisrilmedComponent;
  let fixture: ComponentFixture<VisrilmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisrilmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisrilmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
