import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespositoriesComponent } from './respositories.component';

describe('RespositoriesComponent', () => {
  let component: RespositoriesComponent;
  let fixture: ComponentFixture<RespositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespositoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
