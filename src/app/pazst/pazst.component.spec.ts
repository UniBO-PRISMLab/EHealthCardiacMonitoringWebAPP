import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PazstComponent } from './pazst.component';

describe('PazstComponent', () => {
  let component: PazstComponent;
  let fixture: ComponentFixture<PazstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PazstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PazstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
