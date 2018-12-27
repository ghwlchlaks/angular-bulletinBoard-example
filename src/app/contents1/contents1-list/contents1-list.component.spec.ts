import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contents1ListComponent } from './contents1-list.component';

describe('Contents1ListComponent', () => {
  let component: Contents1ListComponent;
  let fixture: ComponentFixture<Contents1ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contents1ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contents1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
