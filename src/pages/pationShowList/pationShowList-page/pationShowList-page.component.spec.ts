import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PationShowListComponent } from './pationShowList-page.component';

describe('pationShowListComponent', () => {
  let component: PationShowListComponent;
  let fixture: ComponentFixture<PationShowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PationShowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PationShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
