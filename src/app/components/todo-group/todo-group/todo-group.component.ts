import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../../todo-item/todo-item/todo-item.component';
import { TodoGroup } from '../../../interfaces/todo-group.interface';



@Component({
  selector: 'app-todo-group',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemComponent],
  templateUrl: './todo-group.component.html',
  styleUrl: './todo-group.component.scss'
})
export class TodoGroupComponent {
  @Input() todoGroup!: TodoGroup;
  @Input() index!: number;

}
