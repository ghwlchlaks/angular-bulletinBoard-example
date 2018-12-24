import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsMainComponent } from './contents-main.component';

describe('ContentsMainComponent', () => {
  let component: ContentsMainComponent;
  let fixture: ComponentFixture<ContentsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
