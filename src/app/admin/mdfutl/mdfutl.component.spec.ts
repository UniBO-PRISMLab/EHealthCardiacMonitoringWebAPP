import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfutlComponent } from './mdfutl.component';

describe('MdfutlComponent', () => {
  let component: MdfutlComponent;
  let fixture: ComponentFixture<MdfutlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdfutlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfutlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
