import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaztrpComponent } from './paztrp.component';

describe('PaztrpComponent', () => {
  let component: PaztrpComponent;
  let fixture: ComponentFixture<PaztrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaztrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaztrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
