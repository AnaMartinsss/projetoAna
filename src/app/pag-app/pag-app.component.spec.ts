import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagAppComponent } from './pag-app.component';

describe('PagAppComponent', () => {
  let component: PagAppComponent;
  let fixture: ComponentFixture<PagAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
