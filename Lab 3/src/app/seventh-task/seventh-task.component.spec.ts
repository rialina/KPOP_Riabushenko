import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhTaskComponent } from './seventh-task.component';

describe('SeventhTaskComponent', () => {
  let component: SeventhTaskComponent;
  let fixture: ComponentFixture<SeventhTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeventhTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeventhTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
