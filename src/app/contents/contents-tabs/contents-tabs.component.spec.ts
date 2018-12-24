import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsTabsComponent } from './contents-tabs.component';

describe('ContentsTabsComponent', () => {
  let component: ContentsTabsComponent;
  let fixture: ComponentFixture<ContentsTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
