import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponentComponent } from './task-list-component.component';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

describe('TaskListComponentComponent', () => {
  let component: TaskListComponentComponent;
  let fixture: ComponentFixture<TaskListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListComponentComponent,Router]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
