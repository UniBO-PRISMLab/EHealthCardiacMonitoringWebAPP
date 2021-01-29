import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrdatiComponent } from './estrdati.component';

describe('EstrdatiComponent', () => {
  let component: EstrdatiComponent;
  let fixture: ComponentFixture<EstrdatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrdatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrdatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
