import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsAddComponent } from './contents-add.component';

describe('ContentsAddComponent', () => {
  let component: ContentsAddComponent;
  let fixture: ComponentFixture<ContentsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
