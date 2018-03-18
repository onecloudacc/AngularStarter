import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryclientComponent } from './secondaryclient.component';

describe('SecondaryclientComponent', () => {
  let component: SecondaryclientComponent;
  let fixture: ComponentFixture<SecondaryclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
