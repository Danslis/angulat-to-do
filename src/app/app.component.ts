import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoGroupComponent } from './components/todo-group/todo-group/todo-group.component';
import { ToDoStatus, TodoGroup } from './interfaces/todo-group.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularToDo';

  public todoGroups: TodoGroup[];

  constructor() {
    this.todoGroups = [{
      title: 'ToDo',
      items: [{
        title: 'Сделать ToDo',
        description: 'Делаем ToDO Anular стрим',
        status: ToDoStatus.IN_PROGRESS
      },
      {
        title: 'Сделать вторую часть',
        description: 'Делаем ещё что-то',
        status: ToDoStatus.NOT_STARTED
      },
      {
        title: 'Смонтировать и выложить на канал',
        description: 'sdfghjkl;SDFJKL',
        status: ToDoStatus.DONE
      }
      ]
    }]
}
