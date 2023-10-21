import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmHomePageComponent } from './cm-home-page.component';

describe('CmHomePageComponent', () => {
  let component: CmHomePageComponent;
  let fixture: ComponentFixture<CmHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
