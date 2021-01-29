import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdpazComponent } from './mdpaz.component';

describe('MdpazComponent', () => {
  let component: MdpazComponent;
  let fixture: ComponentFixture<MdpazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdpazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdpazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
