import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsViewDialogComponent } from './contents-view-dialog.component';

describe('ContentsViewDialogComponent', () => {
  let component: ContentsViewDialogComponent;
  let fixture: ComponentFixture<ContentsViewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsViewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
