import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../../todo-item/todo-item/todo-item.component';
import { TodoGroup } from '../../../interfaces/todo-group.interface';
import { ItemDoneComponent } from '../../todo-item/item-done/item-done.component';
import { ItemInProgressComponent } from '../../todo-item/item-in-progress/item-in-progress.component';
import { ItemNotStartedComponent } from '../../todo-item/item-not-started/item-not-started.component';



@Component({
  selector: 'app-todo-group',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemComponent, ItemDoneComponent, ItemInProgressComponent, ItemNotStartedComponent, ],
  templateUrl: './todo-group.component.html',
  styleUrl: './todo-group.component.scss'
})
export class TodoGroupComponent {
  @Input() todoGroup!: TodoGroup;
  @Input() index!: number;

}
