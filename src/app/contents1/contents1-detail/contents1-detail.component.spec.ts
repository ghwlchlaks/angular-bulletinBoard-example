import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contents1DetailComponent } from './contents1-detail.component';

describe('Contents1DetailComponent', () => {
  let component: Contents1DetailComponent;
  let fixture: ComponentFixture<Contents1DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents1DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents1DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
