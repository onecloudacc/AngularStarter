import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryclientComponent } from './primaryclient.component';

describe('PrimaryclientComponent', () => {
  let component: PrimaryclientComponent;
  let fixture: ComponentFixture<PrimaryclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
